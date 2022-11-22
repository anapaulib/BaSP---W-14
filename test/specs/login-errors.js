import LoginPage from  '../pageobjects/login.page';

describe('Login errors', () => {
    beforeAll ('Navigate to url', () => {
        browser.url ('https://www.saucedemo.com/');
    });

    it ('should not login with empty inputs', async () => {
        await LoginPage.login('', '');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        await browser.refresh();
    })

    it ('should not login without user', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        await browser.refresh();
    })

    it ('should not login without password', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        await browser.refresh();
    })

    it ('should not login with non valid credentials', async () => {
        await LoginPage.login('Alguien', 'Contraseña');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh();
    })
});
