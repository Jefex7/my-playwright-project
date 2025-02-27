import {Page} from 'playwright';
import {expect} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import {headings, inputForm, hint} from "../content/how-many-days-shift-pattern-content";

export default class HowManyDaysPatternPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly hint: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `label[for='response']`
            this.hint = `.govuk-hint`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.daysShiftPattern),
            expect(page.locator(this.hint)).toContainText(hint.daysShiftPattern),
        ]);
        await axeTest(page);
    }

    async fillDaysInShiftPattern(page : Page) {
        await page.fill(inputForm.selector, '3');
    }

    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", {name: "Continue"}).click();
    }
}
