class CheckoutPage {
    get title () {
        return $('#header_container > div.header_secondary_container > span');
    }

    get nameInput () {
        return $('#first-name');
    }

    get lastnameInput () {
        return $('#last-name');
    }

    get zipInput () {
        return $('#postal-code');
    }

    get continueButton () {
        return $('#continue');
    }

    async completeInfo (name, lastname, zip){
        await this.nameInput.setValue(name);
        await this.lastnameInput.setValue(lastname);
        await this.zipInput.setValue(zip);
    }
}

export default new CheckoutPage();