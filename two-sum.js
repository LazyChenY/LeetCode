/**
 * Created by apple on 16/9/3.
 */

console.time('time of twoSun');
var twoSum = function(numbers, target) {
	var map = {},
		length = numbers.length,
		value,
		anotherValue,
		result = [];

	for(var i = 0; i < length; i++) {
		value = numbers[i];
		anotherValue = target - value;
		if (anotherValue in map) {
			result.push(map[anotherValue]);
			result.push(i);
			break;
		} else {
			map[value] = i;
		}
	}
	return result;
};
console.timeEnd('time of twoSun');
console.log(twoSum([2, 7, 9, 11,4,6,5], 11));
