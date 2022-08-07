// 16. Write a Program to enter a number and print its reverse. 

function reverse(number){
    let numStr = number.toString();
    let numArr = numStr.split("");
    let i = numArr.length-1;
    let tmpArr = [];
    for(i;i>=0;i--){
        tmpArr.push(numArr[i]);
    }
    tmpArr = parseInt(tmpArr.join(""));
    return tmpArr;
}

console.log(reverse(1534));