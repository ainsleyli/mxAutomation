module.exports ={
    beforeEach: browser => {
        browser
        .url('https://www.google.com/')

    },
    after : browser => {
        browser
            .end()
    },
    'test1' : browser => {
        browser
            .maximizeWindow()
            .setValue('input[name="q"]',['puppies', browser.Keys.ENTER])
            .pause(1000)
            .verify.valueContains('input[name="q"]','puppies')
    }
 }