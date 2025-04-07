const render = async (
  element: HTMLElement,
  data: any
) => {
  element.innerHTML = ''; // reset the container

  const avgRating = data?.rows?.[0]?.[0] || 0;

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';

  container.innerHTML = `
    <p style="font-size: 20px; font-weight: bold;">Average Rating: ${avgRating.toFixed(1)}</p>
    <div style="font-size: 40px; color: gold;">
      ${generateStars(avgRating)}
    </div>
  `;

  element.appendChild(container);
};

function generateStars(avg: number): string {
  const fullStars = Math.floor(avg);
  const halfStar = avg % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return '★'.repeat(fullStars) +
         (halfStar ? '⯪' : '') +
         '☆'.repeat(emptyStars);
}

const resize = async () => {};

export default {
  render,
  resize
};