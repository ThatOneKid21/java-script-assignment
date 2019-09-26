//console.log("Did you change my file name?");
console.log("You made it to the console!");

let KevinLink = {
  firstName: "Kevin",
  lastName: "Link",
  age: 16,
  hair: "Short"};
let CluckChow = {
  firstName: "Cluck",
  lastName: "Chow",
  age: 5,
  hair: "Feathers"};
}
console.log(KevinLink);
console.log(CluckChow);
let swap = KevinLink[1];
KevinLink[1] = CluckChow [1];
console.log(KevinLink);
console.log(CluckChow);
