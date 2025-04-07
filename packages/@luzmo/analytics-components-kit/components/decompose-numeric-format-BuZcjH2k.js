/*! * A kit of modern Luzmo Web Components for analytics in your web application.
 * 
 * Copyright © 2025 Luzmo
 * All rights reserved.
 * Luzmo web components (“Luzmo Web Components”)
 * must be used according to the Luzmo Terms of Service.
 * This license allows users with a current active Luzmo account
 * to use the Luzmo Web Components. This license terminates
 * automatically if a user no longer has an active Luzmo account.
 * Please view the Luzmo Terms of Service at: https://www.luzmo.com/information-pages/terms-of-use.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * */
function i(o) {
  const e = /(?:([^{])?([<>=^]))?([+\- \()])?([$#])?(0)?(\d+)?([,_])?(\.-?\d+)?([a-z%]{1,2})?/i.exec(o) ?? [];
  return {
    fill: e[1] || " ",
    align: e[2] || ">",
    sign: e[3] || "-",
    symbol: e[4] || "",
    // added option '(' for negative notation with () //TO-DO implement
    zfill: e[5],
    width: +e[6],
    comma: e[7],
    // added option _ for thousand separator ' '
    precision: e[8],
    typeFormat: e[9]
    // z = general formal with comma, y = percentage with comma, w = scientific with comma
  };
}
export {
  i as d
};
