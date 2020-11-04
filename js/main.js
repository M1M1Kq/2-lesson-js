/*jshint esversion: 6 */

const a = parseInt(prompt('Введите число A: '));
const b = parseInt(prompt('Введите число B: '));

if (a > 0 && b > 0) {
    let c = a - b;
    alert(c);
} else if (a < 0 && b < 0) {
    let c = a * b;
    alert(c);
} else  {
    let c = a + b;
    alert(c);
}



 const A = parseInt(prompt('Введите число A  от [0, 15]: '));

 switch(A) {
     case 1: 
         alert('Ваше число: 1');
         break;
     case 2:
         alert('Ваше число: 2');
         break;
     case 3: 
        alert('Ваше число: 3');
         break;
     case 4:
         alert('Ваше число: 4');
         break; 
     case 5:
         alert('Ваше число: 5');
         break; 
     case 6:
         alert('Ваше число: 6');
         break; 
     case 7:
         alert('Ваше число: 7');
         break; 
     case 8:
         alert('Ваше число: 8');
         break; 
     case 9:
         alert('Ваше число: 9');
         break; 
     case 10:
         alert('Ваше число: 10');
         break; 
     case 11:
         alert('Ваше число: 11');
         break; 
     case 12:
         alert('Ваше число: 12');
        break; 
     case 13:
         alert('Ваше число: 13');
         break; 
     case 14:
         alert('Ваше число: 14');
         break; 
     case 15:
         alert('Ваше число: 15');
         break; 
 }

 function plus() {
     return a + b;
     
 }

function minus() {
    return a - b;

}

function multiply() {
    return a * b;
     
}

function segmentation() {
    return a / b;
}
console.log(plus());
console.log(multiply());
console.log(minus());
 console.log(segmentation());

const arg1 = parseInt(prompt('Введите число #1'));
const arg2 = parseInt(prompt('Введите число #2'));
const operation = (prompt('Введите операцию'));

function mathOperation() {
    switch(operation) {
        case 'сложение':
            return arg1 + arg2;
        case 'вычитание':
            return arg1 - arg2;
        case 'умножение':
            return arg1 * arg2;
        case 'деление':
            return arg1 / arg2;
    }
}

alert(mathOperation());
