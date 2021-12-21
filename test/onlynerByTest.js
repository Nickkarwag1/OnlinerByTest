describe('Open Page', function() {
        it('Open browser page in url and input login & password', async function () {
        await browser.url('https://www.onliner.by/');
        await browser.pause(5000)
        const enterButton = $('//div[text()=\'Вход\']');
        await browser.pause(3000);
        enterButton.click();
        await browser.pause(3000);
        let inputMail = $('//input[@placeholder = \'Ник или e-mail\']');
        inputMail.addValue('test@gmail.com');
        await browser.pause(3000);
        let inputPassword = $('//input[@placeholder = \'Пароль\']');
        inputPassword.addValue('12314351325')
        await browser.pause(5000);
    });
});