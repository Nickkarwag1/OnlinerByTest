describe('Open Page', function() {
    it('Open browser page in url', async function () {
        await browser.url('https://www.onliner.by/');
        console.log(await browser.getUrl());
        await browser.pause(15000)
    });
});