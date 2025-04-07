function configureIframe(iframe: HTMLIFrameElement): void {
  iframe.setAttribute('sandbox', 'allow-scripts');
  iframe.setAttribute('src', 'about:blank');
  iframe.setAttribute('title', 'Custom Chart View');
  iframe.setAttribute('loading', 'lazy');

  iframe.style.cssText = `
    border: none;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
    contain: content;
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
  `;
}

function getIframeHTML(scriptContent: string, styleContent: string): string {
  return `<!DOCTYPE html>
  <html>
    <head>
     <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self' blob:;
        img-src *;
        style-src 'self' 'unsafe-inline';
        script-src 'self' 'unsafe-inline' blob:;
        form-action 'none';
        base-uri 'none'"
      >
      <style>
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        .widget-body {
          width: 100%;
          height: 100%;
          contain: content;
          will-change: transform;
          transform: translateZ(0);
        }
        .widget-tooltip {
          position: absolute;
          z-index: 1061;
          font-size: 0.75rem;
          display: none;
          pointer-events: none !important;
          max-width: 15.625rem;
          box-shadow: rgba(0, 0, 0, 0.2) 0rem 0rem 0.5rem 0.0625rem;
          border-radius: 0.1875rem;
          padding: 0.5rem 0.75rem;
          font-weight: normal;
          line-height: 1.25rem;
          background: rgba(255, 255, 255, 0.95);
          word-break: normal;
          user-select: none;
        }
      </style>
      <style>
        ${styleContent}
      </style>
      <script type="module">
        const moduleCode = \`
          ${scriptContent}
        \`;

        const blob = new Blob([moduleCode], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);

        (async () => {
          try {
            const module = await import(url);
            URL.revokeObjectURL(url);
            const hasBuildQuery = typeof module.buildQuery === 'function';
            window.parent.postMessage({ type: 'moduleLoaded', hasBuildQuery }, '*');

            window.addEventListener('message', async (event) => {
              if (event.source !== parent) return;

              const { type, data } = event.data;
              if (type === 'buildQuery') {
                let query = null;
                if (module?.buildQuery) {
                  query = await module.buildQuery({ slots: event.data.slots, slotConfigurations: event.data.slotConfigurations });
                }
                window.parent.postMessage({ type: 'queryLoaded', query }, '*');
              }
              else if (type === 'render' && module?.render) {
                const container = document.querySelector('.widget-body');
                module.render({ container, ...data });
              }
              else if (type === 'resize' && module?.resize) {
                const container = document.querySelector('.widget-body');
                module.resize({ container, ...data });
              }
            });
          } catch (error) {
            console.error('Error loading module:', error);
            window.parent.postMessage({ type: 'moduleError', error: error.toString() }, '*');
          }
        })();
      </script>
    </head>
    <body>
      <div class="widget-tooltip"></div>
      <div class="widget-body"></div>
    </body>
  </html>
`;
}

export function isValidMessageSource(
  event: MessageEvent,
  iframe: HTMLIFrameElement | null
): boolean {
  return event.source === iframe?.contentWindow;
}

export function setUpSecureIframe(
  container: HTMLElement,
  scriptContent: string,
  styleContent: string
): Promise<{ iframe: HTMLIFrameElement; blobUrl: string }> {
  const iframe = document.createElement('iframe');
  configureIframe(iframe);

  // Create a blob URL from the HTML content
  const htmlContent = getIframeHTML(scriptContent, styleContent);
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const blobUrl = URL.createObjectURL(blob);

  return new Promise((resolve, reject) => {
    const handleLoad = () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
      resolve({ iframe, blobUrl });
    };

    const handleError = (error: ErrorEvent) => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
      reject(error);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    // Set the src after adding event listeners
    iframe.setAttribute('src', blobUrl);
    container.append(iframe);
  });
}
