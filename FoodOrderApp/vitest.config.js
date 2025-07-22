import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [
        "node_modules", // ← excludes all node_modules
        "dist", // ← optional: ignore built files
        "coverage", // ← optional: ignore coverage reports
        "**/*.stories.*", // ← optional: ignore storybook files
      ],
    },
  })
);
