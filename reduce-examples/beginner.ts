const people = [
    {id: "1", name:"Ashley", age: 22},
    {id: "2", name:"Jay", age: 29},
    {id: "3", name:"Bridget", age: 29}
];

//1. count the number of people by not using people.length;
// REDUCE:
// first argument is a call back function with two params like (value_to_accumulate, single_unit) => {return i.e._value_to_accumulate})
// second argument is the initial value
var totPeop = people.reduce((total_amount_of_people, person) => total_amount_of_people + 1, 0)
console.log(totPeop);


//2. count the total price

const SKU = [
    {name:"Earphones", price: 100},
    {name: "Monitor", price: 250},
    {name: "Keyboard", price: 50}
];


//Compare with forEach
// let total = 0;
// SKU.forEach((single_device) => {
//   total += single_device.price;
// });
// console.log(total);

var totalPrice = SKU.reduce((acc, single_device)=> acc + single_device.price, 0);
console.log(totalPrice);
