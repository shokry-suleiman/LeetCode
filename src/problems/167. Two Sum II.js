/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
     let result = [];
    for(let i=0;i<numbers.length;i++){
        let temp = target - numbers[i];
        if(numbers.indexOf(temp) != -1 && numbers.lastIndexOf(temp) > i){
            result = [i+1, numbers.lastIndexOf(temp)+1]
            break;
        }
    }
    return result;
};

// twoSum([2,7,11,15],9);
// twoSum([2,3,4],6)
// twoSum([-1,0],-1)
// twoSum([0,0,3,4],0)