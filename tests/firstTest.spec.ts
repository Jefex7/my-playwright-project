import {expect, Page, test} from "@playwright/test";

test('Test for Exercise one', async ({ page }) => {

    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    const title = page.locator('.govuk-heading-xl');
    await expect(title).toHaveText(/Calculate holiday entitlement/);

    await page.getByRole('button', {name : 'Start now'}).click();

    const nextPageTitle = page.locator('.govuk-caption-l');
    await expect(nextPageTitle).toHaveText('Calculate holiday entitlement');
});
