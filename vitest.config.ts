import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  test: {
    include: ["src/server/**/*.test.ts"],
    environment: "node",
    pool: "forks",
    poolOptions: {
      forks: { singleFork: true },
    },
  },
});
