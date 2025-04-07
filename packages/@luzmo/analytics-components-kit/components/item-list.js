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
  { key: "general", label: "General" },
  { key: "filters", label: "Filters" },
  { key: "bar-column", label: "Bar & Column Charts" },
  { key: "line", label: "Line Charts" },
  { key: "scatter-bubble", label: "Scatter & Bubble Plots" },
  { key: "area", label: "Area Charts" },
  { key: "pie-donut", label: "Pie & Donut" },
  { key: "gauges", label: "Gauges" },
  { key: "map", label: "Map Charts" },
  { key: "hierarchical", label: "Hierarchical Charts" },
  { key: "special", label: "Special Charts" },
  { key: "financial", label: "Financial Charts" }
], a = [
  { type: "area-chart", label: "Area Chart" },
  { type: "bar-chart", label: "Bar Chart" },
  { type: "box-plot", label: "Box Plot" },
  { type: "bubble-chart", label: "Bubble Chart" },
  { type: "bullet-chart", label: "Bullet Chart" },
  { type: "choropleth-map", label: "Choropleth Map" },
  { type: "circle-pack-chart", label: "Circle Pack Chart" },
  { type: "circular-gauge", label: "Circular Gauge" },
  { type: "column-chart", label: "Column Chart" },
  { type: "combination-chart", label: "Combination Chart" },
  { type: "conditional-number", label: "Conditional Number" },
  { type: "date-filter", label: "Date Filter" },
  { type: "donut-chart", label: "Donut Chart" },
  { type: "dropdown-filter", label: "Dropdown Filter" },
  { type: "evolution-number", label: "Evolution Number" },
  { type: "funnel-chart", label: "Funnel Chart" },
  { type: "heat-map", label: "Heat Map" },
  { type: "heat-table", label: "Heat Table" },
  { type: "hexbin-map", label: "Hexbin Map" },
  { type: "image", label: "Image" },
  { type: "line-chart", label: "Line Chart" },
  { type: "marker-map", label: "Marker Map" },
  { type: "ohlc-chart", label: "OHLC Chart" },
  { type: "parallel-coordinates-plot", label: "Parallel Coordinates Plot" },
  { type: "pivot-table", label: "Pivot Table" },
  { type: "pyramid-chart", label: "Pyramid Chart" },
  { type: "radar-chart", label: "Radar Chart" },
  { type: "regular-table", label: "Regular Table" },
  { type: "route-map", label: "Route Map" },
  { type: "sankey-diagram", label: "Sankey Diagram" },
  { type: "scatter-plot", label: "Scatter Plot" },
  { type: "search-filter", label: "Search Filter" },
  { type: "slicer-filter", label: "Slicer Filter" },
  { type: "slider-filter", label: "Slider Filter" },
  { type: "speedometer-chart", label: "Speedometer Chart" },
  { type: "spike-map", label: "Spike Map" },
  { type: "strip-plot", label: "Strip Plot" },
  { type: "sunburst-chart", label: "Sunburst Chart" },
  { type: "symbol-map", label: "Symbol Map" },
  { type: "text", label: "Text" },
  { type: "treemap-chart", label: "Treemap Chart" },
  { type: "video", label: "Video" },
  { type: "wordcloud-chart", label: "Wordcloud Chart" }
], t = [
  { item: "text", type: "text", label: "Text", group: "general" },
  { item: "image", type: "image", label: "Image", group: "general" },
  {
    item: "evolution-number",
    type: "evolution-number",
    label: "Number with evolution",
    group: "general"
  },
  { item: "video", type: "video", label: "Video", group: "general" },
  {
    item: "regular-table",
    type: "regular-table",
    label: "Regular Table",
    group: "general"
  },
  {
    item: "pivot-table",
    type: "pivot-table",
    label: "Pivot Table",
    group: "general"
  },
  { item: "spacer", type: "spacer", label: "Spacer", group: "general" },
  {
    item: "date-filter",
    type: "date-filter",
    label: "Date Filter",
    group: "filters"
  },
  {
    item: "slider-filter",
    type: "slider-filter",
    label: "Slider Filter",
    group: "filters"
  },
  {
    item: "search-filter",
    type: "search-filter",
    label: "Search Filter",
    group: "filters"
  },
  {
    item: "dropdown-filter",
    type: "dropdown-filter",
    label: "Dropdown Filter",
    group: "filters"
  },
  {
    item: "slicer-filter-vertical",
    type: "slicer",
    label: "Slicer Filter",
    group: "filters",
    options: { layout: { alignment: "vertical" } }
  },
  {
    item: "slicer-filter-horizontal",
    type: "slicer",
    label: "Slicer Filter Horizontal",
    group: "filters",
    options: { layout: { alignment: "horizontal" } }
  },
  {
    item: "slicer-filter-table",
    type: "slicer",
    label: "Slicer Filter Table",
    group: "filters",
    options: { layout: { alignment: "table" } }
  },
  {
    item: "rank-slicer-filter",
    type: "slicer",
    label: "Rank Slicer Filter",
    group: "filters",
    options: { layout: { alignment: "rank-vertical" } }
  },
  {
    item: "bar-chart",
    type: "bar-chart",
    label: "Bar Chart",
    group: "bar-column"
  },
  {
    item: "grouped-bar-chart",
    type: "bar-chart",
    label: "Grouped Bar Chart",
    group: "bar-column",
    options: { mode: "grouped" }
  },
  {
    item: "stacked-bar-chart",
    type: "bar-chart",
    label: "Stacked Bar Chart",
    group: "bar-column",
    options: { mode: "stacked" }
  },
  {
    item: "column-chart",
    type: "column-chart",
    label: "Column Chart",
    group: "bar-column"
  },
  {
    item: "grouped-column-chart",
    type: "column-chart",
    label: "Grouped Column Chart",
    group: "bar-column",
    options: { mode: "grouped" }
  },
  {
    item: "stacked-column-chart",
    type: "column-chart",
    label: "Stacked Column Chart",
    group: "bar-column",
    options: { mode: "stacked" }
  },
  {
    item: "line-chart",
    type: "line-chart",
    label: "Line Chart",
    group: "line"
  },
  {
    item: "grouped-line-chart",
    type: "line-chart",
    label: "Grouped Line Chart",
    group: "line",
    options: { mode: "grouped" }
  },
  {
    item: "scatter-plot",
    type: "scatter-plot",
    label: "Scatter Plot",
    group: "scatter-bubble"
  },
  {
    item: "scatter-group",
    type: "scatter-plot",
    label: "Scatter Group",
    group: "scatter-bubble"
  },
  {
    item: "bubble-plot",
    type: "scatter-plot",
    label: "Bubble Plot",
    group: "scatter-bubble"
  },
  {
    item: "colored-bubble-plot",
    type: "scatter-plot",
    label: "Colored Bubble Plot",
    group: "scatter-bubble"
  },
  {
    item: "area-chart",
    type: "area-chart",
    label: "Area Chart",
    group: "area"
  },
  {
    item: "stacked-area-chart",
    type: "area-chart",
    label: "Stacked Area Chart",
    group: "area",
    options: { mode: "stacked" }
  },
  {
    item: "100-area-chart",
    type: "area-chart",
    label: "100% Stacked Area Chart",
    group: "area",
    options: { mode: "100%" }
  },
  {
    item: "streamgraph",
    type: "area-chart",
    label: "Streamgraph",
    group: "area"
  },
  {
    item: "pie-chart",
    type: "donut-chart",
    label: "Pie Chart",
    group: "pie-donut"
  },
  {
    item: "donut-chart",
    type: "donut-chart",
    label: "Donut Chart",
    group: "pie-donut"
  },
  {
    item: "semi-pie-chart",
    type: "donut-chart",
    label: "Semi Pie Chart",
    group: "pie-donut"
  },
  {
    item: "semi-donut-chart",
    type: "donut-chart",
    label: "Semi Donut Chart",
    group: "pie-donut"
  },
  {
    item: "bullet-chart",
    type: "bullet-chart",
    label: "Bullet Chart",
    group: "gauges"
  },
  {
    item: "circular-gauge",
    type: "circular-gauge",
    label: "Circular Gauge",
    group: "gauges"
  },
  {
    item: "conditional-number",
    type: "conditional-number",
    label: "Conditional Number",
    group: "gauges"
  },
  {
    item: "speedometer-chart",
    type: "speedometer-chart",
    label: "Speedometer",
    group: "gauges"
  },
  {
    item: "choropleth-map",
    type: "choropleth-map",
    label: "Choropleth Map",
    group: "map"
  },
  { item: "symbol-map", type: "symbol-map", label: "Symbol Map", group: "map" },
  { item: "marker-map", type: "marker-map", label: "Marker Map", group: "map" },
  { item: "hexbin-map", type: "hexbin-map", label: "Hexbin Map", group: "map" },
  { item: "heat-map", type: "heat-map", label: "Heat Map", group: "map" },
  { item: "route-map", type: "route-map", label: "Route Map", group: "map" },
  { item: "spike-map", type: "spike-map", label: "Spike Map", group: "map" },
  {
    item: "treemap-chart",
    type: "treemap-chart",
    label: "Treemap Chart",
    group: "hierarchical"
  },
  {
    item: "sunburst-chart",
    type: "sunburst-chart",
    label: "Sunburst Chart",
    group: "hierarchical"
  },
  {
    item: "circle-pack-chart",
    type: "circle-pack-chart",
    label: "Circle Pack Chart",
    group: "hierarchical"
  },
  {
    item: "combination-chart",
    type: "combination-chart",
    label: "Combination Chart",
    group: "special"
  },
  {
    item: "parallel-coordinates-plot",
    type: "parallel-coordinates-plot",
    label: "Parallel Coordinates Plot",
    group: "special"
  },
  {
    item: "bubble-chart",
    type: "bubble-chart",
    label: "Bubble Chart",
    group: "special"
  },
  {
    item: "strip-plot",
    type: "strip-plot",
    label: "Strip Plot",
    group: "special"
  },
  {
    item: "radar-chart",
    type: "radar-chart",
    label: "Radar Chart",
    group: "special"
  },
  {
    item: "pyramid-chart",
    type: "pyramid-chart",
    label: "Pyramid Chart",
    group: "special"
  },
  {
    item: "funnel-chart",
    type: "funnel-chart",
    label: "Funnel Chart",
    group: "special"
  },
  {
    item: "alluvial-diagram",
    type: "alluvial-diagram",
    label: "Alluvial Diagram",
    group: "special"
  },
  {
    item: "sankey-diagram",
    type: "sankey-diagram",
    label: "Sankey Diagram",
    group: "special"
  },
  {
    item: "venn-diagram",
    type: "venn-diagram",
    label: "Venn Diagram",
    group: "special"
  },
  { item: "box-plot", type: "box-plot", label: "Box Plot", group: "special" },
  {
    item: "heat-table",
    type: "heat-table",
    label: "Heat Table",
    group: "special"
  },
  {
    item: "wordcloud-chart",
    type: "wordcloud-chart",
    label: "Wordcloud Chart",
    group: "special"
  },
  {
    item: "ohlc-chart",
    type: "ohlc-chart",
    label: "OHLC Chart",
    group: "financial"
  },
  {
    item: "candlestick-chart",
    type: "ohlc-chart",
    label: "Candlestick Chart",
    group: "financial"
  }
];
export {
  e as itemGroups,
  t as itemList,
  a as itemTypes
};
