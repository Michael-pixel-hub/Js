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

let a = func_sum(5, 5);
alert(a);