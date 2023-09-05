import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/react-stellar-burger/',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
