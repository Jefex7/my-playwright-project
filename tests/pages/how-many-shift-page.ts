import {Page} from 'playwright';
import {expect} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import {headings, inputForm} from "../content/how-many-hours-shift-content";

export default class HowManyHoursShiftPage {
    private readonly title: string;
    private readonly heading1: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `.govuk-fieldset__heading`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.howManyHours),
        ]);
        await axeTest(page);
    }

    async fillHoursInEachShift(page : Page) {
        await page.fill(inputForm.selector, '5');
    }

    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", {name: "Continue"}).click();
    }
}
