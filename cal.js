const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equaton = document.getElementById("equaton");
const deletes = document.getElementById("delete");
const resultOperators = document.getElementById("resultOperators");
const result = document.getElementById("result");

let selectedOperator = "";
let leftPart = "";
let rightPart = "";
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (a) {
    result.innerHTML += this.value;
    numbers[i].style.border = "1px solid red"
    setTimeout(() => {
        numbers[i].style.border = "1px solid black"
    }, 500);
    if (selectedOperator == "") {
      leftPart += this.value;
    } else if (selectedOperator != "") {
      rightPart += this.value;
    }
    // alert(leftPart)
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    result.innerHTML += this.value;
    selectedOperator += this.value;
    // alert(leftPart)
  });
}
equaton.addEventListener("click", function () {
  if (selectedOperator == "+") {
    result.innerHTML = parseInt(leftPart) + parseInt(rightPart);
    console.log(leftPart);
    console.log(rightPart);
    console.log(result);
  } else if (selectedOperator == "-") {
    result.innerHTML = parseInt(leftPart) - parseInt(rightPart);
  } else if (selectedOperator == "*") {
    result.innerHTML = parseInt(leftPart) * parseInt(rightPart);
  } else if (selectedOperator == "/") {
    result.innerHTML = parseInt(leftPart) / parseInt(rightPart);
  }
});

deletes.addEventListener("click", function () {
   selectedOperator = "";
   leftPart = "";
   rightPart = "";
  result.innerHTML = "";
});
