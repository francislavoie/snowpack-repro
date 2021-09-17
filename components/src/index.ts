import { Component, createElement } from "react";
import { render } from "react-dom";
import 'vite/modulepreload-polyfill';
import './admin-ui/styles/tailwind.css';
import './admin-ui/styles/common.scss';

// Map the pages to their built files
const modules = import.meta.glob('./!(stories|types)/*!(spec|test|stories).tsx')

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

// Get the page from the module map, if available
const pageModule = modules[`./${config.category}/${config.component}.tsx`] ?? null;
if (pageModule === null) {
  // If the page isn't in the map, render the NotFound page
  console.error(`Module ${config.category}/${config.component} not found`);
  modules[`./Errors/NotFound.tsx`]()
    .then((module) =>
      render(createElement<Component>(module.NotFound), config.target)
    );
} else {
  // Import and render the page component
  console.time("Load");
  pageModule()
    .then((module: Map<string>) =>
      render(
        createElement<Component>(module[config.component], {
          ...config.params,
          ...config.initial,
        } as any),
        config.target
      )
    )
    .catch((e) => {
      console.error(e);
      modules[`./Errors/NotFound.tsx`]()
        .then((module) => render(createElement<Component>(module.NotFound), config.target));
    })
    .finally(() => {
      config.loader.style.display = "none";
      console.timeEnd("Load");
    });
}
