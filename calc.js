    const display = document.querySelector('.display');
    function ToDisplay(value) {
      display.value += value;
    }
    function evaluateExpression() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    }
    function clearDisplay() {
      display.value = '';
    }
    function deleteLastCharacter() {
      display.value = display.value.slice(0, -1);
    }



  /*  const pisplay = document.querySelector(".display")
function ToDisplay(value){
 pisplay.value += value;
}
function calculate(){
  pisplay.value = eval(pisplay.value);
}
function clear(){
  pisplay.value="";
}
function delete(){
  pisplay.value=pisplay.value.slice(0,-1)
}*/