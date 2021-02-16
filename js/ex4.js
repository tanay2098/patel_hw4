const word_list=[];
let word_prompt=prompt('Enter any word: ');

if(word_prompt.toLowerCase()=='stop'){
    console.log('No words to display, Stop was the first word entered.');
}


while(word_prompt.toLowerCase()!='stop'){
    word_list.push(word_prompt);
    word_prompt=prompt('Enter any word: ');
}

for (let i=0; i<word_list.length;i++){
    console.log(word_list[i]);
}