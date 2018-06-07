function numbers(change) {
  var newNum = change.toString();
   if (newNum === '1') {
    var numeral = newNum.replace('1','I');
  } else if (newNum === "2") {
    var numeral = newNum.replace('2','II');
  } else if (newNum === "3") {
    var numeral = newNum.replace('2','III');

  return numeral

}

















$(document).ready(function() {
  $("form#numChange").submit(function(event){
    event.preventDefault();
    var numeral = $("input#numberInput").val();
    var newNumber = [];
    console.log(newNumber);
    var splitNumbers = numeral.split(" ");
    for (var x=0; x<splitNumbers.length; x++) {
      if (isNaN(splitNumbers[x])) {
        newNumber[x] = splitNumbers[x];
      } else {
          }
        }



    $('#result').text(newNumber.join(" "));
  });
});
