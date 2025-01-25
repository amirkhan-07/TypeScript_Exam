function area(radius:number):number{

    return Math.PI * radius * radius;
}
let areaofcircle:number = 5;
console.log(`The area of circle with ${areaofcircle} is : ${area(areaofcircle).toFixed(2)}`);

//--------------AREA OF TRIANGLE-----------------------------------

function areaoftriangle(base:number, height:number):number{

    return 0.5 * base * height;
}
let base:number = 5;
let height:number = 10;
console.log(`The area of triangle is with base:${base} and height:${height} is : ${areaoftriangle(base,height)}`);
