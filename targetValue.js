const targetValue = (nums, target) =>{
    const indices = [];
    for(let i = 0; i < nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                indices.push(i, j);
                break;
            }
        }
    }

    return indices;
}

console.log(targetValue([1, 3, 6, 8, 11, 15], 9));