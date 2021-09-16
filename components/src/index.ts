import { Component, createElement } from "react";
import { render } from "react-dom";
import 'vite/modulepreload-polyfill';
import './admin-ui/styles/tailwind.css';
import './admin-ui/styles/common.scss';

declare let window: {
  AdminConfig: AdminConfig;
};

export type AdminConfig = {
  target: HTMLDivElement;
  loader: HTMLDivElement;
  params: {
    get: string[];
  };
  initial: {
    initial: any;
  };
  category: string;
  component: string;
};

export type Map<V> = { [K in string | number]: V };

// Load injected config
let config: AdminConfig = window.AdminConfig;

// Import and render the page component
console.time("Load");
import(`./${config.category}/${config.component}.js`)
  .then(
    (module: Map<string>) =>
      render(
        createElement<Component>(module[config.component], {
          ...config.params,
          ...config.initial,
        } as any),
        config.target
      ),
    (e) => {
      console.error(e);
      import(`./Errors/NotFound.js`).then((module) =>
        render(createElement<Component>(module.NotFound), config.target)
      );
    }
  )
  .finally(() => {
    config.loader.style.display = "none";
    console.timeEnd("Load");
  });
