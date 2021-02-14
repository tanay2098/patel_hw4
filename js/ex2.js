const r = Number(prompt("Enter the circle radius:"));
const circle={
    radius:`${r}`,

    circumference(radius){
        let circum=2*3.14*r;
        return circum;
    },

    area(radius){
        let ar=3.14*r*r;
        return ar;
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
