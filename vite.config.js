import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import _ from "lodash";

const globalStyleFile = "global.scss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    "@": resolve("src/"),
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      scss: {
        additionalData: (source, fp) => {
          if (_.endsWith(fp, globalStyleFile)) {
            return source;
          } else {
            return `@import "@${globalStyleFile}";\n${source}`;
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
