import { defineConfig, devices } from "@playwright/test";

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: "tests",
  testMatch: "**/*.spec.ts",
  timeout: 30_000,
  fullyParallel: true,
  workers: 1,
  forbidOnly: true,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: externalBaseURL ?? "http://127.0.0.1:4399",
    trace: "retain-on-failure",
    screenshot: "only-on-failure"
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "webkit-desktop",
      use: { ...devices["Desktop Safari"] }
    },
    {
      name: "ios-webkit",
      use: {
        ...devices["iPhone 13"],
        browserName: "webkit",
        viewport: { width: 390, height: 844 }
      }
    }
  ],
  webServer: externalBaseURL
    ? undefined
    : {
        command: "npm run preview -- --port 4399 --ignore-lock",
        url: "http://127.0.0.1:4399",
        reuseExistingServer: false,
        timeout: 120_000
      }
});
