let number=Math.floor(Math.random()*100)+1;
console.log(`System generated number is ${number}.`);
let trials=0;
let temp=0;

while(temp<1){
    let user_number=prompt(`Enter a number to guess: `);

    if(user_number<number){
        trials++;
        console.log(`Too low, guess again`);
    }

    else if(user_number>number){
        trials++;
        console.log(`Too high, guess again`);
    }

    else{
        console.log(`Correct! It took you ${trials} attempts to guess the correct number.`);
        temp+=1;
    }

}
