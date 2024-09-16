const passBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

const allchar = upperCase + lowerCase + numbers + specialChar;

function createPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];
    
    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];

    } 

    passBox.value  = password;
}

function copyPass(){
    passBox.select();
    document.execCommand("copy");
    alert("Password copied successfully!");
}