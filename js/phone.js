
function updatephoneNumber(phoneIncreaseNumber){
    let phoneCaseNumberField = document.getElementById('phone-field')
    let phoneNumFieldStr = phoneCaseNumberField.value;
    let phoneNumVal = parseInt(phoneNumFieldStr);

    let phoneNewFieldNum;
    if(phoneIncreaseNumber === true){
        phoneNewFieldNum = phoneNumVal + 1;
    }else {
        phoneNewFieldNum = phoneNumVal - 1;  
    } 
  
    phoneCaseNumberField.value = phoneNewFieldNum; 
    return phoneNewFieldNum;
}


function phoneGetNumber(phoneNewFieldNum){
    const phoneNewPriceNum = phoneNewFieldNum * 1219;
    const newPriceElement = document.getElementById('phone-total'); 
    newPriceElement.innerText = phoneNewPriceNum;
}

//Plus button two
document.getElementById('btn-phone-plus').addEventListener('click', function(){ 
    const phoneNewFieldNum = updatephoneNumber(true);
    phoneGetNumber(phoneNewFieldNum);  
    calculateSubTotal();

});

//Minus button two
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNewFieldNum = updatephoneNumber(false);
    phoneGetNumber(phoneNewFieldNum)
    calculateSubTotal();
});

