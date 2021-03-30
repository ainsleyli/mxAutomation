var homePage = {}

var useArray = require('../arrayFiles/dupinData')

module.exports ={
    beforeEach: browser => {
        homePage = browser.page.dupinOb()
        homePage
            .navigate ()

    },
    after : browser => {
        browser
            .end()
    },
    'sign in test' : browser => {
       useArray.forEach( test => (
         homePage
            .signIn(homePage,test)
       ))
    }
}