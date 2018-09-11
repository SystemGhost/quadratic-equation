module.exports = function solveEquation(equation) {
  var indexA = equation.indexOf(" * x^2 ");
	var indexB = equation.indexOf(" * x ");
	var numA = equation.slice(0, indexA);
	var numB = equation.slice(indexA + 7, indexB);
	var numC = equation.slice(indexB + 5, equation.length);

	var IntA = parseInt(numA);

	if(numB[0] == '-') {
		var IntB = -1 * parseInt(numB.slice(2));
	}
	else {
		var IntB = parseInt(numB.slice(2));
	}

	if(numC[0] == '-') {
		var IntC = -1 * parseInt(numC.slice(2));
	}
	else {
		var IntC = parseInt(numC.slice(2));
	}

	var IntD = Math.pow(IntB, 2) - (4*IntA*IntC);

	var x1 = (-IntB + Math.sqrt(IntD)) / (2*IntA);
	var x2 = (-IntB - Math.sqrt(IntD)) / (2*IntA);


	var otvet = new Array();

	if(x1 < x2) {
		otvet.push(Math.round(x1));
		otvet.push(Math.round(x2));
	}
	else {
		otvet.push(Math.round(x2));
		otvet.push(Math.round(x1));
	}

	return otvet;

}
