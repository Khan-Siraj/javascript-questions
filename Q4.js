// 4. Write a Program to print all even numbers between 1 to 100.

function get_even_numbers(from,to){
    for(from;from<=to;from++){
        if((from%2) === 0){
           console.log(from); 
        }
    }
}

get_even_numbers(1,100);