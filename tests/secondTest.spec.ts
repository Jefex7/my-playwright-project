import {expect, Page, test} from "@playwright/test";

test('Test for Exercise Two', async ({ page }) => {

    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    const title = page.locator('.govuk-heading-xl');
    await expect(title).toHaveText(/Calculate holiday entitlement/);

    await page.getByRole('button', {name : 'Start now'}).click();

    const irregularHoursTitle = page.locator('.govuk-fieldset__heading.gem-c-radio__heading-text');
    await expect(irregularHoursTitle).toHaveText('Does the employee work irregular hours or for part of the year?');

    await page.click('#response-1')
    await page.getByRole('button', {name : 'Continue'}).click();

    const holidayEntitlementBasedOnTitle = page.locator('.govuk-fieldset__heading.gem-c-radio__heading-text');
    await expect(holidayEntitlementBasedOnTitle).toHaveText('Is the holiday entitlement based on:');

    await page.click('#response-0')
    await page.getByRole('button', {name : 'Continue'}).click();

    const workOutHolidayTitle  = page.locator('.govuk-fieldset__heading.gem-c-radio__heading-text');
    await expect(workOutHolidayTitle).toHaveText('Do you want to work out holiday:');

    await page.getByLabel('for a full leave year').click();
    await page.getByRole('button', {name : 'Continue'}).click();

    const daysWorkedPerWeekTitle= page.locator(`label[for='response']`);
    await expect(daysWorkedPerWeekTitle).toHaveText(`Number of days worked per week?`);

    await page.fill('#response','5');
    await page.getByRole('button', {name : 'Continue'}).click();

    const check28DaysHoliday = page.locator(`div[class='summary'] p`)
    await expect(check28DaysHoliday).toHaveText(`The statutory holiday entitlement is 28 days holiday.`);
});
