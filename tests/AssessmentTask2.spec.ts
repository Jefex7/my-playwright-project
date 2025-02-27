import {test} from "@playwright/test";
import IrregularHoursPage from "./pages/irregular-hours-page";
import HolidayEntitlementPage from "./pages/holiday-entitlement-page";
import DaysWorkedPerWeekPage from "./pages/days-worked-per-week-page";
import LandingPage from "./pages/landingPage";
import IrregularHoursPartYearPage from "./pages/irregular-hours-part-year-page";
import FullYearInformationBasedOnAnswersPage from "./pages/full-year-information-based-on-answers-page";
import StartingAndLeavingPage from "./pages/starting-and-leaving-page";
import EmploymentEndDatePage from "./pages/employment-end-date-page";
import HowManyHoursShiftPage from "./pages/how-many-hours-shift-page";
import HowManyShiftPage from "./pages/how-many-shift-page";
import HowManyDaysPatternPage from "./pages/how-many-days-pattern-page";

test(`Assessment Task 2`, async ({ page }): Promise<void> => {
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
    await holidayEntitlementPage.selectShifts(page);
    await holidayEntitlementPage.continueOn(page);

    const daysWorkedPerWeekPage = new DaysWorkedPerWeekPage();
    await daysWorkedPerWeekPage.checkPageContentAfterShifts(page);
    await daysWorkedPerWeekPage.selectStartingAndLeaving(page);
    await daysWorkedPerWeekPage.continueOn(page);

    const startingAndLeavingPage=  new StartingAndLeavingPage();
    await startingAndLeavingPage.checkPageContent(page);
    await startingAndLeavingPage.addDate(page);
    await startingAndLeavingPage.continueOn(page);

    const employmentEndDatePage = new EmploymentEndDatePage();
    await employmentEndDatePage.checkPageContent(page);
    await employmentEndDatePage.addEndDate(page);
    await employmentEndDatePage.continueOn(page);

    const howManyHoursShiftPage = new HowManyHoursShiftPage();
    await howManyHoursShiftPage.checkPageContent(page);
    await howManyHoursShiftPage.fillHoursInEachShift(page);
    await howManyHoursShiftPage.continueOn(page);

    const howManyShiftPage = new HowManyShiftPage();
    await howManyShiftPage.checkPageContent(page);
    await howManyShiftPage.fillShiftPerShiftPattern(page);
    await howManyShiftPage.continueOn(page);

    const howManyDaysPatternPage = new HowManyDaysPatternPage();
    await howManyDaysPatternPage.checkPageContent(page);
    await howManyDaysPatternPage.fillDaysInShiftPattern(page);
    await howManyDaysPatternPage.continueOn(page);
});