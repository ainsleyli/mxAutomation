var homePage = {}

module.exports = {
    beforeEach : browser => {
        homePage = browser.page.firstTestOb()
        homePage
            .navigate()
    },
    after: browser => {
        homePage
            .end()

    },
    'third test' : browser => {
        homePage
            .setValue('@searchBar', ['puppies',browser.Keys.ENTER])
            .pause(1000)
            .verify.valueContains('@searchBar','puppies')
            .pause(1000)

    }
}
