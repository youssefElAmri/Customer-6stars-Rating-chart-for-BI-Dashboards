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
const e = [
  {
    name: "dimension",
    rotate: !1,
    type: "categorical",
    options: {
      isAggregationDisabled: !0,
      isBinningDisabled: !0,
      areDatetimeOptionsEnabled: !0,
      showOnlyFirstSlotContentOptions: !0
    },
    label: "Dimension",
    /**
     * TODO: Add support for translations based on currentLanguage of charts (in all charts)
     * label: translate(
     * 'vizObjects.slotNames.dimension',
     * null,
     * this.properties.currentLanguage
     * ),
     */
    isRequired: !0,
    canAcceptMultipleColumns: !0,
    acceptableColumnTypes: ["hierarchy"]
  }
];
export {
  e as default
};
