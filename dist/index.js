import {createElement} from "./_snowpack/pkg/react.v17.0.2.js";
import {render} from "./_snowpack/pkg/react-dom.v17.0.2.js";
let config = window.AdminConfig;
console.time("Load");
import(`./${config.category}/${config.component}.js`).then((module) => render(createElement(module[config.component], {
  ...config.params,
  ...config.initial
}), config.target), (e) => {
  console.error(e);
  import("./Errors/NotFound.js").then((module) => render(createElement(module.NotFound), config.target));
}).finally(() => {
  config.loader.style.display = "none";
  console.timeEnd("Load");
});
