// Code your solutions in this file
function writeCards(arrStrings, eventName) {
    let returnArr = [];
    for (let i=0; i<arrStrings.length; i++) {
      returnArr.push(`Thank you, ${arrStrings[i]}, for the wonderful ${eventName} gift!`);
    }
    return returnArr;
  }
  
  function countDown(anyPosInt) {
    while (anyPosInt >= 0) {
        console.log(anyPosInt);
        anyPosInt--;
    }  
  }