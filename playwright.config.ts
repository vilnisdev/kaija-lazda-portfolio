import { defineConfig, devices } from '@playwright/test';

const chromium = devices['Desktop Chrome'];

export default defineConfig({
    testDir: './tests/visual',
    fullyParallel: true,
    retries: 0,
    reporter: 'list',
    use: {
        baseURL: 'http://localhost:4173',
        trace: 'on-first-retry',
    },
    expect: {
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.02,
        },
    },
    webServer: {
        command: 'npm run build && npm run preview -- --port 4173',
        url: 'http://localhost:4173',
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
    },
    projects: [
        {
            name: 'phone',
            use: { ...chromium, viewport: { width: 375, height: 812 }, hasTouch: true },
        },
        {
            name: 'tablet',
            use: { ...chromium, viewport: { width: 768, height: 1024 }, hasTouch: true },
        },
        {
            name: 'desktop',
            use: { ...chromium, viewport: { width: 1440, height: 900 } },
        },
    ],
});
