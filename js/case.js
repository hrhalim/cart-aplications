
function updateCaseNumber(increaseNumber){
    let caseNumberField = document.getElementById('num-field-two')
    let numFieldStr = caseNumberField.value;
    let numFieldVal = parseInt(numFieldStr);

    let newFieldNum;
    if(increaseNumber === true){
        newFieldNum = numFieldVal + 1;
    }else {
        newFieldNum = numFieldVal - 1;  
    } 
  
    caseNumberField.value = newFieldNum; 
    return newFieldNum;
}

//Plus button two
document.getElementById('btn-plush-two').addEventListener('click', function(){ 
    const newFieldNum = updateCaseNumber(true);
    getNumber(newFieldNum);
    calculateSubTotal();


});

//Minus button two
document.getElementById('btn-minus-two').addEventListener('click', function(){
    const newFieldNum = updateCaseNumber(false);
    getNumber(newFieldNum);
    calculateSubTotal();

});

