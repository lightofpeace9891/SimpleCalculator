function calc() {
var value1 = parseInt(document.querySelector("#val1").value);
var value2 = parseInt(document.querySelector("#val2").value);
var operator = document.querySelector("#operator").value;
var calculate;





if(operator == "add"){
	calculate = value1 + value2;
}
else if (operator == "min") {
	calculate = value1 - value2;
}
else if (operator == "mul") {
	calculate = value1 * value2;
}
else if (operator == "div" ) {
	calculate = value1 / value2;
}

 document.querySelector("#result").innerHTML = calculate;

}

