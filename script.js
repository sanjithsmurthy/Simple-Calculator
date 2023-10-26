const res = document.getElementById("result");
function calculate(value) 
{
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) 
  {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => { res.value = ""; }, 1300);
  } 
  else 
  {
    res.value = calculatedValue;
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) 
{
  if (!res.value) 
  {
    res.value = "";
  }
  res.value += enteredValue;
}
document.addEventListener("keydown", keyboardInputHandler);
//function to handle keyboard inputs
function keyboardInputHandler(enteredValue) 
{
  enteredValue.preventDefault();
//grabbing the liveScreen

//numbers
  if (enteredValue.key === "0") 
  {
    res.value += "0";
  }
  else if (enteredValue.key === "1") 
  {
    res.value += "1";
  } 
  else if (enteredValue.key === "2") 
  {
    res.value += "2";
  } 
  else if (enteredValue.key === "3") 
  {
    res.value += "3";
  } 
  else if (enteredValue.key === "4") 
  {
    res.value += "4";
  } 
  else if (enteredValue.key === "5") 
  {
    res.value += "5";
  } 
  else if (enteredValue.key === "6") 
  {
    res.value += "6";
  } 
  else if (enteredValue.key === "7") 
  {
    res.value += "7";
  } 
  else if (enteredValue.key === "7") 
  {
    res.value += "7";
  } 
  else if (enteredValue.key === "8") 
  {
    res.value += "8";
  } 
  else if (enteredValue.key === "9") 
  {
    res.value += "9";
  }

  //operators
  if (enteredValue.key === "+") 
  {
    res.value += "+";
  } 
  else if (enteredValue.key === "-") 
  {
    res.value += "-";
  } 
  else if (enteredValue.key === "*") 
  {
    res.value += "*";
  } 
  else if (enteredValue.key === "/") 
  {
    res.value += "/";
  }
//decimal key
  if (enteredValue.key === ".") 
  {
    res.value += ".";
  }

//press enter to see result
  if (enteredValue.key === "Enter") 
  {
    calculate(result.value);
  }

//backspace for removing the last input
  if (enteredValue.key === "Backspace") 
  {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.valuenteredValue.length - 1);
  }
}