const array_of_vowels=["a","e","i","o","u"];
let count=0;
let word_prompt=prompt('Enter a word: ');

//vowel count
for(let i of word_prompt.toLowerCase()){
    if(array_of_vowels.includes(i)){
        count++;
    }
}

//palindrome checking
function palindrome(word_prompt){

for(j=0;j<(word_prompt.length)/2;j++){
    if(word_prompt[j]!=word_prompt[word_prompt.length-1-j]){
        return false;

    }
    else{
        return true;
    }
}
}

if (palindrome(word_prompt)==true){
    console.log(`${word_prompt} has ${count} vowels and is palindrome. `);
}
else{
    console.log(`${word_prompt} has ${count} vowels and is not a palindrome. `);
}
