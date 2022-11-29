import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import ItemPage from '../pageobjects/item.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import OverviewPage from '../pageobjects/overview.page';
import CompletePage from '../pageobjects/complete.page';

describe ('Purchase with Standard-user', () => {
    beforeAll ('Navigate to url', () => {
        browser.url ('https://www.saucedemo.com/');
        LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should redirect to item page when clicking its image', async () => {
        await expect(HomePage.image).toHaveAttr('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        await HomePage.image.click();
        await expect(ItemPage.itemImage).toBeExisting();
        await expect(ItemPage.itemImage).toHaveAttr('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });

    it('should go back to home page when clicking back button', async () => {
        await ItemPage.backButton.click();
        await expect(HomePage.menuButton).toBeExisting();
    });

    it('should redirect to item page when clicking its name', async () => {
        await expect(HomePage.title).toHaveText('Sauce Labs Backpack');
        await HomePage.title.click();
        await expect(ItemPage.itemTitle).toBeExisting();
        await expect(ItemPage.itemTitle).toHaveText('Sauce Labs Backpack');
    });

    it('should add the item to the cart when clicking the add button', async () => {
        await expect(ItemPage.cartTag).not.toBeExisting();
        await ItemPage.addButton.click();
        await expect(ItemPage.removeButton).toBeExisting();
        await expect(ItemPage.removeButton).toHaveText('REMOVE');
        await expect(ItemPage.cartTag).toBeExisting();
        await expect(ItemPage.cartTag).toHaveText('1');
    });

    it ('should remove the item from the cart when clicking the remove button', async () => {
        await ItemPage.removeButton.click();
        await expect(ItemPage.addButton).toBeExisting();
        await expect(ItemPage.addButton).toHaveText('ADD TO CART');
        await expect(ItemPage.cartTag).not.toBeExisting();
    });

    it('should redirect to cart page when clicking the cart button', async () => {
        await ItemPage.cartButton.click();
        await expect(CartPage.continueShoppingButton).toBeExisting();
        await expect(CartPage.continueShoppingButton).toHaveText('CONTINUE SHOPPING');
    });

    it('should redirect to home page when clicking continue shopping button', async () => {
        await CartPage.continueShoppingButton.click();
        await expect(HomePage.menuButton).toBeExisting();
    });

    it('should add the item to the cart when clicking the add button from the home page', async () => {
        await expect(HomePage.cartTag).not.toBeExisting();
        await HomePage.addButton.click();
        await expect(HomePage.removeButton).toBeExisting();
        await expect(HomePage.removeButton).toHaveText('REMOVE');
        await expect(HomePage.cartTag).toBeExisting();
        await expect(HomePage.cartTag).toHaveText('1');
    });

    it('should remove the item form the cart when clicking the remove button', async () => {
        await HomePage.removeButton.click();
        await expect(HomePage.addButton).toBeExisting();
        await expect(HomePage.addButton).toHaveText('ADD TO CART');
        await expect(HomePage.cartTag).not.toBeExisting();
    });

    it('should redirect to cart page when clicking the cart button from home page', async () => {
        await HomePage.addButton.click();
        await HomePage.cartButton.click();
        await expect(CartPage.checkoutButton).toBeExisting();
        await expect(CartPage.checkoutButton).toHaveText('CHECKOUT');
    });

    it('should redirect to checkout page when clicking the checkout button', async () => {
        await CartPage.checkoutButton.click();
        await expect(CheckoutPage.title).toBeExisting();
        await expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
    });

    it('should redirect to overview page when filling info and clicking the continue button', async () => {
        await CheckoutPage.completeInfo('Alguien', 'Algo', '2000');
        await CheckoutPage.continueButton.click();
        await expect(OverviewPage.title).toBeExisting();
        await expect(OverviewPage.title).toHaveText('CHECKOUT: OVERVIEW');
        await expect(OverviewPage.finishButton).toBeExisting();
        await expect(OverviewPage.finishButton).toHaveText('FINISH');
    });

    it('should redirect to complete page when clicking the finish button', async () => {
        await OverviewPage.finishButton.click();
        await expect(CompletePage.title).toBeExisting();
        await expect(CompletePage.title).toHaveText('THANK YOU FOR YOUR ORDER');
        await expect(CompletePage.image).toBeExisting();
        await expect(CompletePage.image).toHaveAttr('src', '/static/media/pony-express.46394a5d.png');
        await expect(CompletePage.homeButton).toBeExisting();
        await expect(CompletePage.homeButton).toHaveText('BACK HOME');
    });

    it('should redirect to home page when clicking home button', async () => {
        await CompletePage.homeButton.click();
        await expect(HomePage.menuButton).toBeExisting();
    });

    it('should logout', async () => {
        await HomePage.logout();
        await expect(LoginPage.usersList).toBeExisting();
    });
});