import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page'

describe('Problem-user login', () => {
    beforeAll ('Navigate to url', () => {
        browser.url ('https://www.saucedemo.com/');
    });

    it('should login with valid credentials for problem_user', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect(HomePage.menuButton).toBeExisting();
        await expect(HomePage.image).toHaveAttr('src', '/static/media/sl-404.168b1cce.jpg');
    });
    it ('should logout', async () => {
        await HomePage.logout();
        await expect(LoginPage.usersList).toBeExisting();
    });
});