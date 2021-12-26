async function maximize(){
    await browser.maximizeWindow();
}

async function navigateTo(url){
    if(!url){
        return;
    }
    await browser.url(url);
}

export {maximize, navigateTo};
