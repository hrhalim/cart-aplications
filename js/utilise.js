function getSubTotalValue(subtotalID){
    const getSubElement = document.getElementById(subtotalID).innerText;
    const getSubElementStr = parseFloat(getSubElement);
    return getSubElementStr;

}

function calculateSubTotal(){
    const phoneTotal = document.getElementById('phone-total').innerText;
    const caseTotal = document.getElementById('total-price').innerText;
    const subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
    setTextValueId('sub-total', subTotal); 
    const taxAmountstr = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstr);
    setTextValueId('tax-amount', taxAmount);
    const finalAmount =  subTotal + taxAmount;
    setTextValueId('total-amount', finalAmount);

}

function setTextValueId(textId, value){
    const subTotalElement = document.getElementById(textId)
    subTotalElement.innerText = value;  
}

function getNumber(newFieldNum){
    const newPriceNum = newFieldNum * 59;
    const newPriceElement = document.getElementById('total-price'); 
    newPriceElement.innerText = newPriceNum;
}

function phoneGetNumber(phoneNewFieldNum){
    const phoneNewPriceNum = phoneNewFieldNum * 1219;
    const newPriceElement = document.getElementById('phone-total'); 
    newPriceElement.innerText = phoneNewPriceNum;
}

