import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page'

describe('Standard-user login', () => {
    beforeAll ('Navigate to url', () => {
        browser.url ('https://www.saucedemo.com/');
    });

    it('should login with valid credentials for performance_glitch_user', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await expect(HomePage.menuButton).toBeExisting();
        await expect(HomePage.image).toHaveAttr('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });
    it ('should logout', async () => {
        await HomePage.logout();
        await expect(LoginPage.usersList).toBeExisting();
    });
});