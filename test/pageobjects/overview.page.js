class OverviewPage {
    get title () {
        return $('#header_container > div.header_secondary_container > span');
    }

    get finishButton () {
        return $('#finish');
    }
}

export default new OverviewPage();