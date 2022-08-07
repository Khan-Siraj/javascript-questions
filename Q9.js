// 9. Write a Program to print multiplication table of any number. 
function multiplication_table(n){
    let i=1;
    for(i;i<=10;i++){
        let tmp = n*i;
        console.log(`${n} * ${i} = ${tmp}`);
    }
}

multiplication_table(12);