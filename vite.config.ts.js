// vite.config.ts
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { resolve } from "path";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolve("/Users/nwilliams-lucas/projects/work/operations/helios-clone", "src")
    }
  },
  plugins: [
    Vue(),
    Layouts({
      layoutsDir: "src/layouts"
    }),
    Pages({
      exclude: ["**/components/*.vue"],
      pagesDir: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/features/**/pages", baseRoute: "features" },
        { dir: "src/admin/pages", baseRoute: "admin" }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogcmVzb2x2ZShcIi9Vc2Vycy9ud2lsbGlhbXMtbHVjYXMvcHJvamVjdHMvd29yay9vcGVyYXRpb25zL2hlbGlvcy1jbG9uZVwiLCAnc3JjJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBWdWUoKSxcbiAgICAgICAgTGF5b3V0cyh7XG4gICAgICAgICAgICBsYXlvdXRzRGlyOiAnc3JjL2xheW91dHMnXG4gICAgICAgIH0pLFxuICAgICAgICBQYWdlcyh7XG4gICAgICAgICAgICBleGNsdWRlOiBbJyoqL2NvbXBvbmVudHMvKi52dWUnXSxcbiAgICAgICAgICAgIHBhZ2VzRGlyOiBbXG4gICAgICAgICAgICAgICAgeyBkaXI6ICdzcmMvcGFnZXMnLCBiYXNlUm91dGU6ICcnIH0sXG4gICAgICAgICAgICAgICAgeyBkaXI6ICdzcmMvZmVhdHVyZXMvKiovcGFnZXMnLCBiYXNlUm91dGU6ICdmZWF0dXJlcycgfSxcbiAgICAgICAgICAgICAgICB7IGRpcjogJ3NyYy9hZG1pbi9wYWdlcycsIGJhc2VSb3V0ZTogJ2FkbWluJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgXVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxRQUFRLGdFQUFnRTtBQUFBO0FBQUE7QUFBQSxFQUdyRixTQUFTO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0osWUFBWTtBQUFBO0FBQUEsSUFFaEIsTUFBTTtBQUFBLE1BQ0YsU0FBUyxDQUFDO0FBQUEsTUFDVixVQUFVO0FBQUEsUUFDTixFQUFFLEtBQUssYUFBYSxXQUFXO0FBQUEsUUFDL0IsRUFBRSxLQUFLLHlCQUF5QixXQUFXO0FBQUEsUUFDM0MsRUFBRSxLQUFLLG1CQUFtQixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
