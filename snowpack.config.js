module.exports = {
  exclude: [
    "**/node_modules/**/*",
    "**/__tests__/*",
    "**/*.@(spec|test|stories).@(js|mjs|ts|tsx)",
    "**/*.scss",
    "stories/**/*",
  ],
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    [
      "@snowpack/plugin-run-script",
      {
        cmd:
          "sass --style=compressed --no-source-map src/admin-ui/styles/common.scss ../dist/admin-ui/styles/common.css",
        watch: "$1 --watch",
      },
    ],
    "@snowpack/plugin-postcss",
  ],
  mount: {
    src: "/",
  },
  packageOptions: {
    polyfillNode: true,
  },
  buildOptions: {
    out: "../dist",
    clean: true,
    minify: false,
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
};
