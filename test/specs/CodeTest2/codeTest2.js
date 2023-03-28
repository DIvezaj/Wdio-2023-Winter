describe('WebDriver IO Code Test', () => {

    const { expect } = require('chai');

        // Question - 1: (50-points)
        /**
         * Testcase: Verify rewards form is empty and Conitnue button is disabled
         * Steps:
         * 1. Launch hotels.com
         * 2. Click on Learn about Hotels.com Rewards
         * 3. -> Verify Hotels Rewards opened in a new window
         * 4. Click on Join Now
         * 5. -> Verify Form is blank
         * 6. -> Verify Continue button is NOT enabled
         */

        it('Verify rewards form is empty and Conitnue button is disabled', async () => {
   
        //Launch hotels.com
        await browser.url('https://www.hotels.com/');
        await browser.pause(5000);

        //Click on Learn about Hotels.com Rewards
        const learnMoreRewards = await $('//a[text()="Learn about Hotels.com Rewards"]');
        await learnMoreRewards.scrollIntoView(false);
        await learnMoreRewards.click();
        await browser.pause(5000);

        // Verify Hotels Rewards opened in a new window

        //Click on Join Now
        const joinNowButton = await $('//a[@href="/profile/signup.html?target=H4sIAAAAAAAAANPPyC9JzdEtSi1PLEop1i3IzMlJLNIHCxYn5-dCxfUySnJzAO-PS-YrAAAA&intlid=Overview%20page%20%3A%3A%20Join%20Now%20at%20top%20of%20page"]');
       await joinNowButton.moveTo();
        await browser.pause(2000);

        const joinButton = await $('//a[text()="Join Now"]')
        await joinButton.click();

        // Verify Form is blank
        const emailField = await $('//input[@name="signupFormEmailInput"]');
        const firstNameField = await $('//input[@name="firstNameSignUp"]');
        const lastNameField = await $('//input[@name="lastNameSignUp"]');
        const passwordField = await $('//input[@name="passwordSingUpInput"]');
        await expect(firstNameField.getValue()).toEqual('');
        await expect(lastNameField.getValue()).toEqual('');
        await expect(emailField.getValue()).toEqual('');
        await expect(passwordField.getValue()).toEqual('');

        //Verify Continue button is NOT enabled

        const continueButton = await $('//button[@id="signupFormSubmitButton"]');
        await expect(continueButton.isEnabled()).toBeFalse();

        });

        // Question - 2: (50-points)
        /**
         * Testcase: Verify past dates are disabled in Calendar
         * Steps:
         * 1. Launch hotels.com
         * 2. Click on Dates section
         * 3. If not already, go to current month
         * 4. -> Verify all past dates are disabled
         */
        it('Verify past dates are disabled in Calendar', async () => {
            
            // Launch hotels.com
            await browser.url('https://www.hotels.com/');
            await browser.pause(5000);

            //Click on Dates section
            const dateButton = await $('//button[@data-name="date_form_field"]')
            dateButton.click();
            browser.pause(5000);

            //If not already, go to current month
            

            //Verify all past dates are disabled


        });
        
    })