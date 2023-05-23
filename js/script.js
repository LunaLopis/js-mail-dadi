"use strict";
let email= "";
let emails = ['primaemail@gmail.com', 'secondaemail@gmail.com', "terzaemail@gmail.com", "quartaemail@gmail.com"];
let flag = false;
let message;

for (let i = 0; i < emails.length; i++) {
    document.getElementById("email").value;
    if (emails[i] === email) {
        flag = true;
    }
}
if (flag === true) {
    message= ('elemento trovato');
}
else {
    message= ('elemento non trovato');
}

document.getElementById('esito').innerHTML= (message);






