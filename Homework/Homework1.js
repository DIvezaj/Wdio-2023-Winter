// TC-1: Verify current-temp is in between 45 and 55
/**
 * 1. Launch https://www.accuweather.com/
 * 2. Verify current-temp is in between 45 and 55
 */

it('Verify current-temp is in between 45 and 55', async () => {
    //Launch Facebook.com
    await browser.url('https://www.accuweather.com/');

    //Find the current temperature in the DOM
    const currentTempElement = await $('//span[@class="recent-location-temp"]');

    //Get the text that displays the current temperature in the Element
    const currentTempText = await currentTempElement.getText();
    
    //Convert the string value of the current temperature into a Number datatype
    const currentTemp = parseInt(currentTempText);
  
    // Verify the current temperature is between 45 and 55 using an if-else loop
    if (currentTemp >= 45 && currentTemp <= 55) {
      console.log("Current temperature is within the desired range.");
    } else {
      console.log("Current temperature is outside the desired range.");
    };
});

// TC-2: Verify error on empty login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click 'Log In' button
 * 3. Verify error msg is displayed
 *      The email or mobile number you entered isn’t connected to an account
 */

it('Verify error on empty login flow', async () => {
    //Launch Facebook.com
    await browser.url('https://www.facebook.com/');
  
    //Find the Log In button and click it
    const loginButton = await $('//button[text() = "Log In"]');
    await loginButton.click();
  
    //Find the Error message text that matches: The email or mobile number you entered isn’t connected to an account
    const errorMessage = await $('//div[contains(text(),"The email or mobile number you entered isn’t connected to an account")]');
    const errorMessageText = await errorMessage.getText();
  
    //Verify the message appears as "The email or mobile number you entered isn’t connected to an account" using an if-else statement
    if (errorMessageText === 'The email or mobile number you entered isn’t connected to an account. ') {
      console.log('Error message is displayed: ' + errorMessageText);
    } else {
      console.log('Error message is not displayed');
    }
  });

// TC-3: Verify the empty messenger login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click on 'Messenger' link
 * 3. Verify 'Keep me signed in' checkbox is NOT selected
 * 4. Click 'Log In' button
 * 5. Verify link -> "Find your account and log in" is displayed
 * 6. Verify 'Continue' button is enabled
 * 7. Verify 'Keep me signed in' checkbox is NOT selected
 * 8. Click 'Keep me signed in' checkbox
 * 9. Verify 'Keep me signed in' checkbox is selected
 * 
 */

it.only('Verify the empty messenger login flow', async () => {
    //Launch Facebook.com
    await browser.url('https://www.facebook.com/');
  
    //Find the messenger element in the DOM and click it
    const messengerLink = await $('//a[text() = "Messenger"]')
    await messengerLink.click();
  
    //Find the 'Keep me signed in' checkbox element in the DOM. Verify if the checkbox is clicked or not. If not, click it
    const keepMeSignedInCheckbox = await $('//input[@name="persistent"]')
    const isSelected = await keepMeSignedInCheckbox.isSelected()
    if (isSelected) {
      await keepMeSignedInCheckbox.click();
    }
  
    //Find the Log In button and click it
    const loginButton = await $('//button[@id="loginbutton"]')
    await loginButton.click();
  
    //Find the 'Find your account and log in' message in the DOM and verify that the hyperLink contains this text
    const findYourAccountLink = await $('//a[text() = "Find your account and log in."]')
    const isDisplayed = await findYourAccountLink.isDisplayed()
    if (isDisplayed) {
      console.log('Link "Find your account and log in" is displayed');
    } else {
      console.log('Link "Find your account and log in" is not displayed');
    }
  
    //Find the "Continue" button in the DOM and verify that it is enabled
    const continueButton = await $('//button[text() = "Continue"]')
    const isEnabled = await continueButton.isEnabled()
    if (isEnabled) {
      console.log('Continue button is enabled');
    } else {
      console.log('Continue button is not enabled');
    }
  
    //Pause to give time to click the checkbox
    await browser.pause(10000);

    // Find the "Keep me signed in" checkbox on this page and verify that it is NOT clicked
    const keepMeSignedInCheckbox2 = await $('//input[@type="checkbox"]') 
    const isSelected2 = await keepMeSignedInCheckbox2.isSelected()
    if (isSelected2) {
      console.log('Keep me signed in checkbox is selected');
    } else {
      console.log('Keep me signed in checkbox is not selected');
    }

    //Click the "Keep me signed in" checkbox on this page
    await keepMeSignedInCheckbox2.click()
  
    //Verify that the "keep me signed in" checkbox on this page is selected
    const isSelected3 = await keepMeSignedInCheckbox2.isSelected()
    if (isSelected3) {
      console.log('Keep me signed in checkbox is selected');
    } else {
      console.log('Keep me signed in checkbox is not selected');
    }
  });