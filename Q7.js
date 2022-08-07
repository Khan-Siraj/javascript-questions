// 7. Write a Program to find sum of all even numbers between 1 to n. 

function sum_of_even_numbers(from,to){
    let total=0;
    for(from;from<=to;from++){
        if((from%2)===0){
            total+=from
        }
    }

    return total;
} 

console.log(sum_of_even_numbers(1,10));