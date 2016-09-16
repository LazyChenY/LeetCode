/**
 * Created by _Lazy_ on 2016/9/16.
 */
var reverseString = function(s) {
	if(!s){
		return s;
	}else{
		return s.split('').reverse().join('');
	}
};