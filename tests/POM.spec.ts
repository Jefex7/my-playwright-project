import {expect, Page, test} from "@playwright/test";
import IrregularHoursPage from "./pages/irregular-hours-page";
import HolidayEntitlementPage from "./pages/holiday-entitlement-page";
import DaysWorkedPerWeekPage from "./pages/days-worked-per-week-page";
import FullYearPage from "./pages/full-year-page";
import InformationBasedOnAnswersPage from "./pages/information-based-on-answers-page";
import LandingPage from "./pages/landingPage";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageContent(page);
    await irregularHoursPage.selectNo(page);
    await irregularHoursPage.continueOn(page);

    const holidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPageContent(page);
    await holidayEntitlementPage.selectDays(page);
    await holidayEntitlementPage.continueOn(page);

    const daysWorkedPerWeekPage = new DaysWorkedPerWeekPage();
    await daysWorkedPerWeekPage.checkPageContent(page);
    await daysWorkedPerWeekPage.selectFullYear(page);
    await daysWorkedPerWeekPage.continueOn(page);

    const fullYearPage= new FullYearPage();
    await fullYearPage.checkPageContent(page);
    await fullYearPage.fillDays(page);
    await fullYearPage.continueOn(page);

    const informationBasedOnAnswersPage = new InformationBasedOnAnswersPage();
    await informationBasedOnAnswersPage.checkPageContent(page);
});

test(`Second test triggers error`, async ({ page }): Promise<void> => {
    const landingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageContent(page);
    await irregularHoursPage.continueOn(page);
    await irregularHoursPage.checkErrorIsPresent(page);
});