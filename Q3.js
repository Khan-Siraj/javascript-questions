// 3. Write a Program to print all alphabets from a to z.  

function a_to_z(){
    let char = 97;
    for(char;char<(97+26);char++){
        console.log(String.fromCharCode(char));
    }
}

a_to_z();