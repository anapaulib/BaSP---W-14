class CompletePage {
    get title () {
        return $('#checkout_complete_container > h2');
    }

    get image () {
        return $('#checkout_complete_container > img');
    }

    get homeButton () {
        return $('#back-to-products');
    }
}

export default new CompletePage();