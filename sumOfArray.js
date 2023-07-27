const sumOfArray = nums =>{
    let sum = 0;
    for(n of nums){
        if(n>0){
            sum += n;
        }
    }
    return sum;
}


// console.log(sumOfArray([2, -5, 10, -3, 7]));