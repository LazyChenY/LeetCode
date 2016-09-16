/**
 * Created by _Lazy_ on 2016/9/14.
 */
var convert = function (str, row) {
	var len = str.length,
		size = 2 * row - 2,
		i,
		j,
		mid,
		result = "";
	for (i = 0; i < row; i++) {
		for (j = i; j < len; j += size) {
			result += str.charAt(j);
			if (i != 0 && i != row - 1) {
				mid = j + size - 2 * i;
				if (mid < len) {
					result += str.charAt(mid);
				}
			}
		}
	}
	return result;
};
