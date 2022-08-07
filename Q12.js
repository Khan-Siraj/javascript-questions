// 12. Write a Program to find sum of first and last digit of a number. 

function sum_of_first_and_last_digit_of_a_number(number){
    let string = number.toString();
    let first = parseInt(string[0]);
    let last = parseInt(string[string.length-1]);
    let total = first+last;
    return total;
}

console.log(sum_of_first_and_last_digit_of_a_number(434));