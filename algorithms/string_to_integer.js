/**
 * Created by _Lazy_ on 2016/9/27.
 */
/*Hint:
 * The str begins with whitespace or contains whitespace;
 * The str begins with "+" or "-" ,or contains "+" "-";
 * The str contains characters isNaN;
 * Result overflow
 * */
var myAtoi = function (str) {
	var len = str.length,
		i,
		result = 0,
		isNegative = null,
		isStarted = false;

	for (i = 0; i < len; i++) {

		//whitespace
		if (str.charAt(i) === ' ') {
			if (!isStarted) {
				continue;
			} else {
				return getResult(isNegative, result);
			}
		}

		//isNegative
		if (isNegative === null) {
			if (str.charAt(i) === '+') {
				isNegative = false;
				isStarted = true;
				continue;
			} else if (str.charAt(i) === '-') {
				isNegative = true;
				isStarted = true;
				continue;
			}
		}

		//not a number
		cur = parseInt(str.charAt(i));
		if (!isNaN(cur)) {
			if(!isStarted){
				isStarted=true;
			}
			result = result * 10 + cur;
		} else {
			return getResult(isNegative, result);
		}
	}
	return getResult(isNegative, result);
};

var getResult = function (isNegative, result) {
	result = isNegative ? result * (-1) : result;
	//overflow
	if (result > 2147483647) {
		result = 2147483647;
	} else if (result < -2147483648) {
		result = -2147483648;
	}
	return result;
};
