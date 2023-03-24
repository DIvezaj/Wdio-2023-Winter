// TC-1: Verify the current date is select by default in Sign Up dropdown
/**
 * 1. Launch facebook.com
 * 2. Click on Create New Account button
 * 3. Verify current date is displayed in the birthdate dropdowns.
 */
// Hint:
/**
 * get current date using moment-library - A
 * get default date selected in the dropdown - B
 * expect(A, '').to.equals(B)
 * 
 */

const moment = require('moment');
const {expect}  = require('chai');

it('Verify the current date is selected by default in Sign Up dropdown', async () => {

    //Launch facebook.com
    await browser.url('https://www.facebook.com/');
    await browser.pause(2000);

    //Click on Create New Account button
    const createNewAccountButton = await $('a*=new');
    await createNewAccountButton.click();
    await browser.pause(2000);

    //Verify current month is displayed in the birthdate dropdowns
    const currentMonthElement = await $('//select[@id="month"]//option[@selected]');

    const currentMonthText = await currentMonthElement.getText();
    const currentMonthAbbr = moment().format('MMM');

    expect(currentMonthText, 'It is not the current month').to.equal(currentMonthAbbr);

    //Verify current day is displayed in the birthdate dropdowns
    const currentDayElement = await $('//select[@id="day"]//option[@selected]');

    const currentDayText = await currentDayElement.getText();
    const currentDay = moment().format('DD');

    expect(currentDayText, 'It is not the current day').to.equal(currentDay);
 
       //Verify current year is displayed in the birthdate dropdowns
    const currentYearElement = await $('//select[@id="year"]//option[@selected]');

    const currentYearText = await currentYearElement.getText();
    const currentYear = moment().format('YYYY');

    expect (currentYearText, 'It is not the current year').to.equal(currentYear);
});

// TC-2: Verify the travelers count on homepage
/**
 * 1. Launch hotels.com
 * 2. Make Adults=4 in Room-1
 * 3. Click Add another room
 * 4. Make Adults=3 in Room-2
 * 5. Click on Done button
 * 6. Verify total-travalers is equals to the number of adults mentioned in rooms
 * 
 */

it ('Verify the travelers count on homepage', async () => {
    // Launch hotels.com
    await browser.url('https://www.hotels.com/');
    browser.pause (2000)

    // Click the room picker button
    const pickRoom = await $('button[data-stid=open-room-picker]');
    await pickRoom.click();

    browser.pause(2000);
  
    // Make Adults=4 in Room-1
    const room1Adults = await $('//h3[text()="Room 1"]/following::button[2]');
    browser.pause (2000);
    await room1Adults.click();
    browser.pause (2000);
    await room1Adults.click();
    browser.pause (2000);
  
    // Click Add another room
    const addAnotherRoomButton = await $('//button[text() = "Add another room"]');
    await addAnotherRoomButton.click();
    browser.pause (5000)

    // Make Adults=3 in Room-2
    const room2Adults = await $('//h3[text()="Room 2"]/following::button[2]');
    await room1Adults.click();
    browser.pause(2000);
    await room1Adults.click();
    browser.pause(2000);
  
    // Click on Done button
    const doneButton = await $('//button[text()="Done"]');
    await doneButton.click();
    browser.pause (2000)
  
    // Verify total-travelers is equals to the number of adults mentioned in rooms
    const totalTravelers1 = await $('//*[@id="traveler_selector_adult_step_input-0"]');
    const totalTravelers2 = await $('//*[@id="traveler_selector_adult_step_input-1"]');
    const totalAdults = parseInt(await totalTravelers1.getValue()) + parseInt(await totalTravelers2.getValue());
    expect (totalAdults, 'Total travelers count is incorrect').to.have.text(`${totalAdults} travelers`);
  });
  
  
  
  
  