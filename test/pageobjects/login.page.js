class LoginPage {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    get menuButton () {
        return $('#react-burger-menu-btn');
    }

    get errorMessage () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
