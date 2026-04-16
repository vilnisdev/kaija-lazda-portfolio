import { test, expect } from '@playwright/test';

test.describe('section snapshots', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Disable animations for determinism
        await page.addStyleTag({
            content: `*, *::before, *::after { animation: none !important; transition: none !important; }`,
        });
    });

    test('hero', async ({ page }) => {
        await expect(page.locator('.hero-section')).toHaveScreenshot();
    });

    test('about', async ({ page }) => {
        await page.locator('.about-section').scrollIntoViewIfNeeded();
        await expect(page.locator('.about-section')).toHaveScreenshot();
    });

    test('portfolio', async ({ page }) => {
        await page.locator('.portfolio-section').scrollIntoViewIfNeeded();
        await expect(page.locator('.portfolio-section')).toHaveScreenshot();
    });

    test('experience', async ({ page }) => {
        await page.locator('#experience').scrollIntoViewIfNeeded();
        await expect(page.locator('#experience')).toHaveScreenshot();
    });
});

test.describe('interactive states', () => {
    test('hamburger menu open (phone+tablet only)', async ({ page, viewport }) => {
        test.skip(!viewport || viewport.width > 768, 'desktop has no hamburger');
        await page.goto('/');
        await page.locator('.nav-toggle').click();
        await expect(page.locator('.nav-panel')).toHaveClass(/open/);
        await expect(page.locator('.nav-panel')).toHaveScreenshot();
    });

    test('image lightbox open', async ({ page }) => {
        await page.goto('/');
        await page.locator('.portfolio-item').first().click();
        await expect(page.locator('.lightbox-overlay')).toBeVisible();
        await page.locator('.lightbox-image').waitFor();
        await expect(page.locator('.lightbox-overlay')).toHaveScreenshot();
    });
});
