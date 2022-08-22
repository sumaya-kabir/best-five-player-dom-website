function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    if(typeof inputField === 'number'){
        const inputValueString = inputField.value;
        const inputValue = parseFloat(inputValueString);
        inputField.value = '';

        return inputValue;
    } else {
        alert('Please Enter a Valid Number');
    }
}

function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue;
}

function setValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}