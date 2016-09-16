/**
 * Created by _Lazy_ on 2016/9/11.
 * dynamic record position
 */
var longestPalindrome = function (s) {
	var start = 0,
		end = 0,
		max = 1,
		position = [],
		len = s.length;
	for (var i = 0; i < len; i++) {
		position.push(new Array(len));
		position[i][i] = true;
	}
	for (i = len - 1; i >= 0; i--) {
		for (var j = i + 1; j < len; j++) {
			if (s.charAt(i) == s.charAt(j) && (j == i + 1 || position[i + 1][j - 1])) {
				position[i][j] = true;
				if (j - i + 1 > max) {
					max = j - i + 1;
					start = i;
					end = j;
				}
			}
		}
	}
	return s.slice(start, end + 1);
};

