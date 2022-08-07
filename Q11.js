// 11. Write a Program to find first and last digit of a number. 

function first_and_last_digit_of_a_number(number){
    let string = number.toString();
    let first = string[0];
    let last = string[string.length-1];
    console.log(first,last);
}

first_and_last_digit_of_a_number(9792443188);