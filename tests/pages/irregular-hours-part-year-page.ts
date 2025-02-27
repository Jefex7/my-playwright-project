import {Page} from 'playwright';
import {expect} from "@playwright/test";
import {headings, hint, inputForm} from "../content/irregular-hours-part-year-content";
import axeTest from "../accessibilityTestHelper";

export default class IrregularHoursPartYearPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly hint: string;
    private readonly dayLabel: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `.govuk-fieldset__heading`,
            this.hint = `.govuk-hint`,
            this.dayLabel = `label[for='response-0']`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.leaveYear),
            expect(page.locator(this.hint)).toContainText(hint.leaveYearHint),
            expect(page.locator(this.dayLabel)).toContainText(inputForm.day.label),
        ]);
        await axeTest(page);
    }

    async addDate(page: Page) {
        await page.fill(inputForm.day.selector, '01');
        await page.fill(inputForm.month.selector, '12');
        await page.fill(inputForm.year.selector, '1998');
    }


    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", {name: "Continue"}).click();
    }
}
