// 8.  Write a Program to find sum of all odd numbers between 1 to n.

function sum_of_odd_numbers(from,to){
    let total=0;
    for(from;from<=to;from++){
        if((from%2)===1){
            total+=from
        }
    }

    return total;
} 

console.log(sum_of_odd_numbers(1,5));