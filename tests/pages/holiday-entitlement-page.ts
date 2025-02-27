import { Page } from 'playwright';
import {expect} from "@playwright/test";
import {headings, hint, radioButtons} from "../content/holiday-entitlement-content";
import axeTest from "../accessibilityTestHelper";

export default class HolidayEntitlementPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly hint: string;
    private readonly radioLabel: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `.govuk-fieldset__heading.gem-c-radio__heading-text`,
            this.hint = `.govuk-hint`,
            this.radioLabel = `label[for='response-0']`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.basedOn),
            expect(page.locator(this.hint)).toContainText(hint.entitlementBasedOn),
            expect(page.locator(this.radioLabel)).toContainText(radioButtons.days.label),
        ]);
        await axeTest(page);
    }

    async selectDays(page : Page) {
        await page.click(radioButtons.days.selector);
    }

    async selectAnnualised (page: Page) {
        await page.click(radioButtons.annual.selector);
    }

    async selectShifts (page: Page) {
        await page.click(radioButtons.shifts.selector);
    }

     async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", { name: "Continue" }).click();
    }
}