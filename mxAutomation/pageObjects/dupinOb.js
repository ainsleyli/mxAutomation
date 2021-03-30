var signInCommands = {
    signIn : function (browser,data) {
        this
            .maximizeWindow()
            .waitForElementVisible('body')
            .click('@feed')
            .setValue('@feed',data.feed)
            .click('@amount')
            .setValue('@amount',data.amount)
            // .click('@plusBtn')
            .click('@catBtn')
            .pause(1000)
            .clearValue('@feed')
            .clearValue('@amount')
            .pause(1500)
         
        return this 
    }
}
module.exports = {
    url: 'https://dupin.qa.internal.mx/categorizations',
    commands: [signInCommands],
    elements: {

        // selectors for transaction test
        catBtn: 'button[onclick="categorizeTransactions()"]',
        plusBtn: 'button[onclick="addRow()"]',

        feed: {
            selector : '(//td[@contenteditable="true"])[1]',
            locateStrategy: 'xpath'
        },
        amount: {
            selector : '(//td[@contenteditable="true"])[2]',
            locateStrategy: 'xpath'
        },

        matchStack: 'button[onclick="doMatchStack(0)"]',
        actType: '#account_type',
        userGuid: '#user_guid',


    }}