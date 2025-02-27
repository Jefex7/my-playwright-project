import { Page } from 'playwright';
import {expect} from "@playwright/test";
import {irregularRadioButtons, hint, Headings, error} from "../content/irregular-hours-content";
import axeTest from "../accessibilityTestHelper";

export default class IrregularHoursPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly hint: string;
    private readonly radioLabel: string;
    private readonly errorLabel: string;

    constructor() {
        this.title = `.govuk-caption-l`,
        this.heading1 = `.govuk-fieldset__heading.gem-c-radio__heading-text`,
        this.hint = `.govuk-hint`,
        this.radioLabel = `label[for='response-0']`
        this.errorLabel = `.govuk-error-summary__title`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(Headings.firstHeading),
            expect(page.locator(this.heading1)).toContainText(Headings.irregularHoursHeading1),
            expect(page.locator(this.hint)).toContainText(hint.irregularHoursHint),
            expect(page.locator(this.radioLabel)).toContainText(irregularRadioButtons.yes.label),
        ]);
        await axeTest(page);
    }

    async selectYes(page : Page) {
        await page.click(irregularRadioButtons.yes.selector)
    }

    async selectNo(page : Page) {
        await page.click(irregularRadioButtons.no.selector)
    }

    async checkErrorIsPresent(page : Page) {
        await expect(page.locator(this.errorLabel)).toContainText(error.errorLabel);
    }

    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", { name: "Continue" }).click();
    }
}
