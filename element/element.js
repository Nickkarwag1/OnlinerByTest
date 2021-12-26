export default function element(selector){
    const  el  = $(selector);

    async function scrollToElement(){
        console.log('Scrolling to element')
        await el.scrollIntoView()
    }

    async function getElementText(){
        const text = await el.getText();
        console.log(`Element test is "${text}"`)
        return text
    }

    async function setValue(value){
        // TODO: Implement logger (winston)
        // logger.info()
        console.log(`Setting value ${value} in element xpath: ${selector}`)
        await el.waitForEnabled();
        await el.addValue(value);
    }

    async function clickElement(){
        console.log(`Click by element xpath: ${selector}`)
        await el.waitForClickable();
        await el.click();
    }

    return{
        getElementText,
        setValue,
        clickElement,
        scrollToElement
    }
}
