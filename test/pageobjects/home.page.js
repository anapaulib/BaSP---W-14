class HomePage {
    get menuButton () {
        return $('#react-burger-menu-btn');
    }

    get image () {
        return $('#item_4_img_link > img');
    }

    get logoutButton () {
        return $('#logout_sidebar_link');
    }

    async logout () {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}

export default new HomePage();
