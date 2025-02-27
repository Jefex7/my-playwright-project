import { Page } from 'playwright';
import {expect} from "@playwright/test";
import {headings,hint, inputForm} from "../content/full-year-content";
import axeTest from "../accessibilityTestHelper";

export default class FullYearPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly hint: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `label[for='response']`,
            this.hint = `.govuk-hint`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.daysWorked),
            expect(page.locator(this.hint)).toContainText(hint.fullYearHint)
        ]);
        await axeTest(page);
    }

    async fillDays(page : Page) {
        await page.fill(inputForm.selector, '5');
    }

    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", { name: "Continue" }).click();
    }
}