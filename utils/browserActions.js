async function maximize(){
    await browser.maximizeWindow();
}

async function navigateTo(url){
    if(!url){
        return;
    }
    await browser.url(url);
}

async function reloadSession(){
    await browser.reloadSession();
}
export {maximize, navigateTo, reloadSession};
