import { Page } from 'playwright';
import {expect} from "@playwright/test";
import { headings, paragraphs, list,  } from "../content/information-based-on-answers-content";
import axeTest from "../accessibilityTestHelper";

export default class InformationBasedOnAnswersPage {
    private readonly title: string;
    private readonly heading1: string;
    private readonly paragraph: string;
    private readonly bulletPoint: string;


    constructor() {
        this.title = `.govuk-caption-xl.gem-c-heading__context`,
            this.heading1 = `.gem-c-heading__text.govuk-heading-xl`,
            this.paragraph = `div[class='summary'] p`,
            this.bulletPoint = `div[id='result-info'] li:nth-child(1)`
    }

    async checkPageContent(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(headings.firstHeading),
            expect(page.locator(this.heading1)).toContainText(headings.informationBasedOnAnswers),
            expect(page.locator(this.paragraph)).toContainText(paragraphs.p0),
            expect(page.locator(this.bulletPoint)).toContainText(list.item1),
        ]);
        await axeTest(page);
    }
}