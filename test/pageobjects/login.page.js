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

    get errorMessage () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    get usersList () {
        return $('#root > div > div.login_wrapper > div.login_credentials_wrap > div');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
