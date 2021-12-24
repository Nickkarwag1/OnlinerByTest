const USERNAME_IN_HOMEPAGE = "//div[contains(@class, 'header__name')]";

async function isOpened(){
    return $(USERNAME_IN_HOMEPAGE).isDisplayed();
}

const UsernameInHomePage = { isOpened }
export default UsernameInHomePage;