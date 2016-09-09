/**
 * Created by apple on 16/9/8.
 * use object 'Set' to store the substring
 * if repeat,delete the character from 0 to i until meet the repeated character;
 * left is the start of the substring
 * my poor English......... =.=
 */
var lengthOfLongestSubstring = function (str) {
	var resultStr = new Set(),
		char,
		left = 0,
		len = 0;
	for (var i = 0; i < str.length; i++) {
		char = str.charAt(i);
		if (resultStr.has(char)) {
			//delete the repeat character's left string
			while (left < i && str.charAt(left) !== char) {
				resultStr.delete(str.charAt(left));
				left++;
			}
			left++;
		} else {
			resultStr.add(char);
			len = Math.max(len,resultStr.size);
		}
	}
	return len;
};