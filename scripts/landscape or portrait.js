 //console.log("did you change my file name?");
 //console.log("You made it to the console");

let stop = false; //Not a number test variable

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function main() {
  //console.log("it works");

  let

  let firstNumber, secondNumber, text;

  //get the Width-value from id=textfield1
  firstNumber= document.getElementByID("textfield1").value;
  document.getElementByID("validityTest1").innerHTML = alert ( testNaN (firstnumber);
  document.getElementByID("validityTest1").innerHTML = testNaN (firstNumber);

  //get the Hight-value from id=textfield2
  secondNumber= document.getElementByID("textfield2").value;
  //testNaN (secondNumber);
  document.getElementByID("validityTest2").innerHTML = alert ( testNaN (secondNumber);
  document.getElementByID("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementByID("answer").innerHTML = "Restart the example, an Width or Hight needs to be a number."
  } else {
    console.log("the display geomitry is", geomitry (firstNumber, secondNumber) );
    document.getElementByID('answer').innerHTML = "this display is ", + geomitry (firstNumber, secondNumber);
  }

}
