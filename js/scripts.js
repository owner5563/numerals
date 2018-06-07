function numbers(change) {
  var newNum = change.toString();
   if (newNum[0] === '1') {
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
}
  return numeral

};









$(document).ready(function() {
  $("form#numChange").submit(function(event) {
    event.preventDefault();
    var output = $('#numberInput').val();
    var romanNumber = numbers(output);
    console.log(romanNumber);
    //
    // var newNumber = [];
      $('#result').text(romanNumber);


  });
});
