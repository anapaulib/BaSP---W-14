class CartPage {
    get checkoutButton () {
        return $('#checkout');
    }

    get continueShoppingButton () {
        return $('#continue-shopping');
    }
}

export default new CartPage();