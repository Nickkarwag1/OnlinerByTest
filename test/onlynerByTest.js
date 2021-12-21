describe('Open Page', function() {
        it('Open browser page in url and input login & password', async function () {
        await browser.url('https://www.onliner.by/');
        await browser.pause(5000)
        const enterButton = $('//div[text()=\'Вход\']');
        await browser.pause(3000);
        enterButton.click();
        await browser.pause(3000);
        const user = {username: 'test@gmail.com', password:'12314351325'}
        const inputMail = $('//input[@placeholder = \'Ник или e-mail\']');
        inputMail.addValue(user.username);
        await browser.pause(3000);
        const inputPassword = $('//input[@placeholder = \'Пароль\']');
        inputPassword.addValue(user.password)
        await browser.pause(5000);
    });
});