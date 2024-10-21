<script type="text/javascript">
(function myCalculator() {

const keys = document.getElementsByTagName("button");

for (const key of keys) {
  key.onclick = handleClick;
}
const output = document.getElementById("output");
let numOut = "",
  numOutNew = "",
  op = "", 
  int = 0; 


  function handleClick() {
  let num = this.innerText; 
   
  if (this.classList.contains("number")) {
    numOut += num;
    output.value = numOut; 
  } else {
   
    doCalc(num);
  }
}

function doClear() {
  output.value = "";
  numOut = "";
  numOutNew = "";
  op = "";
  int = 0;
}


function doCalc(calc) {
  
  if (calc === "C") {
    doClear();
  } 

  else if (numOutNew !== "") {
    numOut = parseFloat(numOut); 
    switch (op) {
      case "/":
        if (numOut !== 0) {
          int = numOutNew / numOut;
        } else {
          int = "error";
        }
        break;
      case "*":
        int = numOutNew * numOut;
        break;
      case "-":
        int = numOutNew - numOut;
        break;
      case "+":
        int = numOutNew + numOut;
        break;
      case "=":
        int = parseFloat(output.value);
        break;
    }
    if (isNaN(int)) { 
      output.value = "error";
          setTimeout(function() {
            doClear();
          }, 2000);
    } else {
      output.value = int; 
      numOutNew = int; 
    }
  } else if (numOut !== "") {

    numOutNew = parseFloat(numOut); 
  }
  op = calc; 
  numOut = ""; 
}

})();

</script>