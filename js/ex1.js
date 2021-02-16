let num1=Number(prompt('Enter the first number: '));
let num2=Number(prompt('Enter the second number: '));
let operator=prompt('Enter anyone operator from (+,-,*,/):');

function calculate(num1,num2){
    switch(operator){
        case '+':
            console.log(`${num1},${num2},${operator}`);
            let add=num1+num2;
            console.log(`${num1} + ${num2}=${add}`);
            break;

        case '-':
            console.log(`${num1},${num2},${operator}`);
            let subtract=num1-num2;
            console.log(`${num1} - ${num2}=${subtract}`);
            break;
        case '*':
            console.log(`${num1},${num2},${operator}`);
            let product=num1*num2;
            console.log(`${num1} x ${num2}=${product}`);
            break;
        case '/':
            console.log(`${num1},${num2},${operator}`);
            let divide=num1/num2;
            console.log(`${num1} / ${num2}=${divide}`);
            break;
    }
}

calculate(num1,num2);