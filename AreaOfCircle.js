function area(radius) {
    return Math.PI * radius * radius;
}
var areaofcircle = 5;
console.log("The area of circle with ".concat(areaofcircle, " is : ").concat(area(areaofcircle).toFixed(2)));
//--------------AREA OF TRIANGLE-----------------------------------
function areaoftriangle(base, height) {
    return 0.5 * base * height;
}
var base = 5;
var height = 10;
console.log("The area of triangle is with base:".concat(base, " and height:").concat(height, " is : ").concat(areaoftriangle(base, height)));
