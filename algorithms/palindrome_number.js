/**
 * Created by _Lazy_ on 2016/9/27.
 * get the highest order and  lowest order,then determine whether equal，if equal,discarded them and get a new number;
 * getting the highest order and  lowest order until the new number < 0;
 */
var isPalindrome = function (num) {
	var base = 1,
		temp,
		left,
		right;
	if (num < 0) {
		return false;
	}
	if (num === 0) {
		return true;
	}

	temp = num;
	while (Math.floor(temp / 10) > 0) {
		base *= 10;
		temp /= 10;
	}

	while (num) {
		left = Math.floor(num / base);
		right = Math.floor(num % 10);
		if (left === right) {
			num -= base * left;
			num = Math.floor(num / 10);
			base /= 100;
		} else {
			return false;
		}
	}
	return true;
};