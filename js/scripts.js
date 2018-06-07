function breakNumbers (littleNum) {
  var splitNum = littleNum.split('');
  return splitNum
}

function numbers(change) {
  var newNum = change.toString();
   if (newNum[0] === '1') {
     console.log(newNum);
    var numeral = newNum.replace('1','I');
  } else if (newNum === "2") {
    var numeral = newNum.replace('2','II');
  } else if (newNum === "3") {
    var numeral = newNum.replace('3','III');
  } else if (newNum === "4") {
    var numeral = newNum.replace('4','IV');
  } else if (newNum=== "5") {
    var numeral = newNum.replace('5','V');
  } else if (newNum === "6") {
    var numeral = newNum.replace('6','VI');
  } else if (newNum === "7") {
    var numeral = newNum.replace('7','VII');
  } else if (newNum === "8") {
    var numeral = newNum.replace('8','VIII');
  } else if (newNum === "9") {
    var numeral = newNum.replace('9','IX');
  } else {}

  return numeral

};

function twoNumbers(change) {
  var newNum = change.toString();
   if (newNum[0] === '1') {
    var numeral = newNum[0].replace('1','X');

  } else if (newNum[0] === "2") {
    var numeral = newNum[0].replace('2','XX');
  } else if (newNum[0] === "3") {
    var numeral = newNum[0].replace('3','XXX');
  } else if (newNum[0] === "4") {
    var numeral = newNum[0].replace('4','XL');
  } else if (newNum[0]=== "5") {
    var numeral = newNum[0].replace('5','L');
  } else if (newNum[0] === "6") {
    var numeral = newNum[0].replace('6','LX');
  } else if (newNum[0] === "7") {
    var numeral = newNum[0].replace('7','LXX');
  } else if (newNum[0] === "8") {
    var numeral = newNum[0].replace('8','LXXX');
  } else if (newNum[0] === "9") {
    var numeral = newNum[0].replace('9','XC');
  } else {}
  return numeral

};

function threeNumbers(change) {
  var newNum = change.toString();
    if (newNum[0] === '1') {
    var numeral = newNum[0].replace('1','C');
  } else if (newNum[0] === "2") {
    var numeral = newNum[0].replace('2','CC');
  } else if (newNum[0] === "3") {
    var numeral = newNum[0].replace('3','CCC');
  } else if (newNum[0] === "4") {
    var numeral = newNum[0].replace('4','CD');
  } else if (newNum[0]=== "5") {
    var numeral = newNum[0].replace('5','D');
  } else if (newNum[0] === "6") {
    var numeral = newNum[0].replace('6','DC');
  } else if (newNum[0] === "7") {
    var numeral = newNum[0].replace('7','DCC');
  } else if (newNum[0] === "8") {
    var numeral = newNum[0].replace('8','DCCC');
  } else if (newNum[0] === "9") {
    var numeral = newNum[0].replace('9','CM');
  } else {}
  return numeral

};

function fourNumbers(change) {
  var newNum = change.toString();
    if (newNum[0] === '1') {
    var numeral = newNum[0].replace('1','M');
  } else if (newNum[0] === "2") {
    var numeral = newNum[0].replace('2','MM');
  } else if (newNum[0] === "3") {
    var numeral = newNum[0].replace('3','MMM');
  } else if (newNum[0] > 3) {
    alert('not a number')
  }
  return numeral

};

$(document).ready(function() {
  $("form#numChange").submit(function(event) {
    event.preventDefault();
    var output = $('#numberInput').val();
    var finalArray = []
    for (x=0; x < output.length; x++) {
      if (output.length === 4) {
        debugger;
        var splitNum = breakNumbers(output);
        var romanNumber4 =fourNumbers(splitNum);
        var splicedNum = splitNum.splice(1);
        var romanNumber3 = threeNumbers(splicedNum);
        var splicedNum1 = splicedNum.splice(1)
        var romanNumber2 = twoNumbers(splicedNum1);
        var splicedNum2 = splicedNum1.splice(1)
        var romanNumber = numbers(splicedNum2)
        var finalArray = romanNumber4 + romanNumber3 + romanNumber2 + romanNumber
      } else if (output.length === 3) {
        debugger;
        var splitNum = breakNumbers(output);
        var romanNumber3 = threeNumbers(splitNum);
        var splicedNum = splitNum.splice(1)
        var romanNumber2 = twoNumbers(splicedNum);
        var splicedNum1 = splicedNum.splice(1)
        var romanNumber = numbers(splicedNum1)
        var finalArray = romanNumber3 + romanNumber2 + romanNumber
      } else if (output.length === 2) {
        var splitNum = breakNumbers(output);
        var romanNumber2 = twoNumbers(splitNum);
        var splicedNum = splitNum.splice(1)
        var romanNumber = numbers(splicedNum)
        var finalArray = romanNumber2 + romanNumber
      } else if (output.length === 1) {
        var splitNum = breakNumbers(output);
        var romanNumber = numbers(splitNum)
        var finalArray = romanNumber
      }
    }
      $('#result').text(finalArray);
  });
});
