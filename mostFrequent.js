const mostFrequent = (nums) => {
    let a, b=0;   //a is the number comparing and b is number of times repeated

    for(let i = 0; i< nums.length; i++){
        let temp = 0
        for(let j = 0; j<nums.length; j++){
            if(nums[i] === nums[j]){
                temp++;
                
            }
        }
        // console.log('temp', temp, b);
        if(temp > b){
            a= nums[i];
            b=temp

        }
    }
    return a;
}

console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));