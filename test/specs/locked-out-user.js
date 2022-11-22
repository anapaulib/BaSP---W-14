import LoginPage from  '../pageobjects/login.page';

describe('Locked-out-user login', () => {
    beforeAll ('Navigate to url', () => {
        browser.url ('https://www.saucedemo.com/');
    });

    it ('should not login with locked_out_user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
});
