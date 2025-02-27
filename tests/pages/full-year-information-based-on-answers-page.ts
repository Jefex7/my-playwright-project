import { Page } from 'playwright';
import {expect} from "@playwright/test";
import { headings, paragraphs, list,  } from "../content/full-year-information-based-on-answers-content";
import axeTest from "../accessibilityTestHelper";

export default class FullYearInformationBasedOnAnswersPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly paragraph: string;
    private readonly paragraph1: string;
    private readonly paragraph2: string;


    constructor() {
        this.title = `.govuk-caption-xl.gem-c-heading__context`,
            this.heading1 = `.gem-c-heading__text.govuk-heading-xl`,
            this.paragraph = `div[data-flow-name='calculate-your-holiday-entitlement'] p:nth-child(1)`,
            this.paragraph1 = `div[id='wrapper'] p:nth-child(2)`,
        this.paragraph2 = `div[id='wrapper'] p:nth-child(3)`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.firstHeading),
            expect(page.locator(this.heading1)).toContainText(headings.informationBasedOnAnswers),
            expect(page.locator(this.paragraph)).toContainText(paragraphs.p0),
            expect(page.locator(this.paragraph1)).toContainText(paragraphs.p1),
            expect(page.locator(this.paragraph2)).toContainText(paragraphs.p2),
        ]);
        await axeTest(page);
    }
}