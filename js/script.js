"use strict";

let emails = ['primaemail@gmail.com', 'secondaemail@gmail.com', "terzaemail@gmail.com", "quartaemail@gmail.com"];

let email = prompt('inserire il nome del gioco che vuoi cercare');
let flag = false;
for (let i = 0; i < emails.length; i++) {

    if (emails[i] === email) {
        flag = true;
    }
}
if (flag === true) {
    console.log('elemento trovato');
}
else {
    console.log('elemento non trovato');
}






