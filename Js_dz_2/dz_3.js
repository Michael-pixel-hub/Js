let a = 10;
let b = -5;

if (a > 0 && b > 0) {
	alert(a - b);
}
else if (a < 0 && b < 0) {
	alert(a * b);
}
else if (a < 0 && b > 0 || a > 0 && b < 0) {
	alert(a + b);
}
