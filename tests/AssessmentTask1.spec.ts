import {test} from "@playwright/test";
import IrregularHoursPage from "./pages/irregular-hours-page";
import HolidayEntitlementPage from "./pages/holiday-entitlement-page";
import DaysWorkedPerWeekPage from "./pages/days-worked-per-week-page";
import LandingPage from "./pages/landingPage";
import IrregularHoursPartYearPage from "./pages/irregular-hours-part-year-page";
import FullYearInformationBasedOnAnswersPage from "./pages/full-year-information-based-on-answers-page";

test(`Assessment Task 1`, async ({ page }): Promise<void> => {
    const landingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageContent(page);
    await irregularHoursPage.selectYes(page);
    await irregularHoursPage.continueOn(page);

    const irregularHoursPartYearPage = new IrregularHoursPartYearPage();
    await irregularHoursPartYearPage.checkPageContent(page);
    await irregularHoursPartYearPage.addDate(page);
    await irregularHoursPartYearPage.continueOn(page);

    const holidayEntitlementPage = new HolidayEntitlementPage();
    await holidayEntitlementPage.checkPageContent(page);
    await holidayEntitlementPage.selectAnnualised(page);
    await holidayEntitlementPage.continueOn(page);

    const daysWorkedPerWeekPage = new DaysWorkedPerWeekPage();
    await daysWorkedPerWeekPage.checkPageContent(page);
    await daysWorkedPerWeekPage.selectFullYear(page);
    await daysWorkedPerWeekPage.continueOn(page);
});