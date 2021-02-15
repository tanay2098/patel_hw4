const values=[3,11,7,2,9,10];
let sum=0;

//Sum of array values
for (let i=0;i<values.length;i++){
    sum+=values[i];
}

console.log(`Sum of all array values is=${sum} `);

//Minimum value
let min_val=Math.min(...values);
console.log(`${min_val}`);

// Maximum Value
let max_val=Math.max(...values);
console.log(`${max_val}`);
