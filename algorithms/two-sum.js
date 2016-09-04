/**
 * Created by apple on 16/9/4.
 */
var twoSum = function(nums, target) {
	var map={},
		value,
		neededValue,
		result=[];
	for(var i=0;i<nums.length;i++){
		value=nums[i];
		neededValue=target-value;
		if(value in map){
			result.push(map[value]);
			result.push(i);
		}else{
			map[neededValue]=i;
		}
	}
	return result;
};

