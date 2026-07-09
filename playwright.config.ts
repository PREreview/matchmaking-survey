import { defineConfig } from "@playwright/test"

export const E2E_PORT = 3100
export const E2E_ADMIN_PASSWORD = "e2e-test-password"
export const E2E_BASE_URL = `http://127.0.0.1:${E2E_PORT}`

export default defineConfig({
  testDir: "e2e",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: E2E_BASE_URL,
    httpCredentials: {
      username: "admin",
      password: E2E_ADMIN_PASSWORD,
    },
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
  webServer: {
    command: "node dist/server/index.js",
    url: E2E_BASE_URL,
    reuseExistingServer: !process.env.CI,
    env: {
      PORT: String(E2E_PORT),
      DB_FILE: ":memory:",
      ADMIN_PASSWORD: E2E_ADMIN_PASSWORD,
    },
  },
})
