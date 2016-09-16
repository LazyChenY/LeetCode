/**
 * Created by _Lazy_ on 2016/9/16.
 * think about overflow
 */
var reverse = function(x) {
	var divider,
		result=0,
		isNegative=x<0?true:false;
	if(isNegative){
		x=x*(-1);
	}
	while(x!==0){
		divider=x%10;
		result=result*10+divider;
		x=Math.floor(x/10);
	}
	if(result>=2147483648){
		return 0;
	}
	return isNegative?result*(-1):result;
};