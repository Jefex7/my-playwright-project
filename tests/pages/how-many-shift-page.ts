import {Page} from 'playwright';
import {expect} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import {headings, inputForm} from "../content/how-many-shift-content";

export default class HowManyShiftPage {
    private readonly title: string;
    private readonly heading1: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `label[for='response']`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.shiftsPerShiftPattern),
        ]);
        await axeTest(page);
    }

    async fillShiftPerShiftPattern(page : Page) {
        await page.fill(inputForm.selector, '2');
    }

    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", {name: "Continue"}).click();
    }
}
