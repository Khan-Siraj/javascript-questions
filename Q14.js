// 14. Write a Program to calculate sum of digits of a number.  
 
function calculate_sum_of_digits(number){
    let numStr = number.toString();
    let numArr = numStr.split("");
    let total = 0;
    for(let num of numArr){
        let tmp = parseInt(num);
        total+=tmp
    }

    return total;
}

console.log(calculate_sum_of_digits(71));