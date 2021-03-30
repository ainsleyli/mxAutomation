var homePage = {}

module.exports = {
    beforeEach : browser => {
        homePage = browser.page.firstTestOb()
        homePage
            .navigate()
    },
    after: browser => {
        browser
            .end()
    },
     'sign in test' : browser => {
        homePage
            .signIn(homePage,test)
    }
}
