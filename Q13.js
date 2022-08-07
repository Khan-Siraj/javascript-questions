// 13. Write a Program to swap first and last digits of a number. 

function swap(number){
    let string = number.toString();
    let first = string[0];
    let last =  string[string.length-1];
    let stringArr = string.split("");
    stringArr.shift();
    stringArr.pop();
    stringArr.push(first);
    stringArr.unshift(last)
    let tmp = parseInt(stringArr.join(""));
    return tmp;
}

console.log(swap(541));

