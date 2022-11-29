class HomePage {
    get menuButton () {
        return $('#react-burger-menu-btn');
    }

    get image () {
        return $('//*[@id="item_4_img_link"]/img');
    }

    get title () {
        return $('//*[@id="item_4_title_link"]/div');
    }

    get logoutButton () {
        return $('#logout_sidebar_link');
    }

    get addButton () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get removeButton () {
        return $('#remove-sauce-labs-backpack');
    }

    get cartButton () {
        return $('#shopping_cart_container > a');
    }

    get cartTag () {
        return $('//*[@id="shopping_cart_container"]/a/span');
    }

    async logout () {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}

export default new HomePage();
