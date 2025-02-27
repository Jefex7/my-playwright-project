import {Page} from 'playwright';
import {expect} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import {headings, inputForm} from "../content/starting-and-leaving-content";

export default class StartingAndLeavingPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly dayLabel: string;
    private readonly monthLabel: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `.govuk-fieldset__heading`,
            this.dayLabel = `label[for='response-0']`
        this.monthLabel = `label[for='response-1']`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.leaveYear),
            expect(page.locator(this.dayLabel)).toContainText(inputForm.day.label),
            expect(page.locator(this.monthLabel)).toContainText(inputForm.month.label),
        ]);
        await axeTest(page);
    }

    async addDate(page: Page) {
        await page.fill(inputForm.day.selector, '01');
        await page.fill(inputForm.month.selector, '01');
        await page.fill(inputForm.year.selector, '1999');
    }


    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", {name: "Continue"}).click();
    }
}
