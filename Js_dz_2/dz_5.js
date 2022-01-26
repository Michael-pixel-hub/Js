function func_sum(number_one, number_two){
	return `Сумма - ${number_one + number_two}`;
}

function func_subtraction(number_one, number_two){
	return `Вычитание - ${number_one - number_two}`;
}

function func_division(number_one, number_two){
	return `Деление - ${number_one / number_two}`;
}

function func_multiplication(number_one, number_two){
	return `Произведение - ${number_one * number_two}`;
}

function mathOperation(arg1, arg2, operation){
	switch(operation) {
		case '+':
			return func_sum(arg1, arg2);
			break;
		case '-':
			return func_subtraction(arg1, arg2);
			break;
		case '*':
			return func_multiplication(arg1, arg2);
			break;
		case '/':
			return func_division(arg1, arg2);
			break;
		default:
			alert("Введенное значение неверное");
	}
}

alert(mathOperation(5,5,'-'));
