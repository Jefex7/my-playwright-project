import { Page } from 'playwright';
import {expect} from "@playwright/test";
import { headings, radioButtons} from "../content/days-worked-per-week-content";
import axeTest from '../accessibilityTestHelper';

export default class DaysWorkedPerWeekPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly heading1Version2: string;
    private readonly fullYearLabel: string;
    private readonly startingLabel: string;

    constructor() {
        this.title = `.govuk-caption-l`,
            this.heading1 = `.govuk-fieldset__heading.gem-c-radio__heading-text`,
            this.fullYearLabel = `label[for='response-0']`
        this.startingLabel = `label[for='response-1']`
        this.heading1Version2 = `.govuk-fieldset__heading.gem-c-radio__heading-text`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1)).toContainText(headings.workOutHoliday),
            expect(page.locator(this.fullYearLabel)).toContainText(radioButtons.fullYear.label),
            expect(page.locator(this.startingLabel)).toContainText(radioButtons.starting.label)
        ]);
        await axeTest(page);
    }

    async checkPageContentAfterShifts(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.holidayEntitlement),
            expect(page.locator(this.heading1Version2)).toContainText(headings.calculateHoliday),
            expect(page.locator(this.fullYearLabel)).toContainText(radioButtons.fullYear.label),
            expect(page.locator(this.startingLabel)).toContainText(radioButtons.starting.label)
        ]);
        await axeTest(page);
    }

    async selectFullYear(page : Page) {
        await page.click(radioButtons.fullYear.selector);
    }

    async selectStartingAndLeaving(page : Page) {
        await page.click(radioButtons.startingAndLeaving.selector);
    }

    async continueOn(page: Page): Promise<void> {
        await page.getByRole("button", { name: "Continue" }).click();
    }
}