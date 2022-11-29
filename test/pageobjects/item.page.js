class ItemPage {
    get itemImage () {
        return $('//*[@id="inventory_item_container"]/div/div/div[1]/img');
    }

    get itemTitle () {
        return $('//*[@id="inventory_item_container"]/div/div/div[2]/div[1]');
    }

    get backButton () {
        return $('#back-to-products');
    }

    get addButton () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get removeButton () {
        return $('#remove-sauce-labs-backpack');
    }

    get cartTag () {
        return $('//*[@id="shopping_cart_container"]/a/span');
    }

    get cartButton () {
        return $('#shopping_cart_container > a');
    }
}

export default new ItemPage();