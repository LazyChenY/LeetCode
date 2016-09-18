/**
 * Created by _Lazy_ on 2016/9/18.
 */
var findMedianSortedArrays = function (arr1, arr2) {
	var len1 = arr1.length,
		len2 = arr2.length,
		len = len1 + len2;
	if (len % 2 == 1) {
		return findMedianHelper(0, arr1, 0, arr2, (len + 1) / 2);
	} else {
		return (findMedianHelper(0, arr1, 0, arr2, len / 2) + findMedianHelper(0, arr1, 0, arr2, len / 2 + 1)) / 2;
	}
};

function findMedianHelper(aStart, arrA, bStart, arrB, k) {
	if (aStart >= arrA.length) {
		return arrB[bStart + k - 1];
	} else if (bStart >= arrB.length) {
		return arrA[aStart + k - 1];
	} else if (k == 1) {
		return Math.min(arrA[aStart], arrB[bStart]);
	}
	var aVal = aStart + Math.floor(k / 2) - 1 < arrA.length ? arrA[aStart + Math.floor(k / 2) - 1] : Number.MAX_VALUE,
		bVal = bStart + Math.floor(k / 2) - 1 < arrB.length ? arrB[bStart + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
	if (aVal < bVal) {
		return findMedianHelper(aStart + Math.floor(k / 2), arrA, bStart, arrB, k - Math.floor(k / 2));
	} else {
		return findMedianHelper(aStart, arrA, bStart + Math.floor(k / 2), arrB, k - Math.floor(k / 2));
	}
}

console.log(findMedianSortedArrays([1, 3, 4, 7, 8, 9], [2, 4, 6, 9, 10, 11]));