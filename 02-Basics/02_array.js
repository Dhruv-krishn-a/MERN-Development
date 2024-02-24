const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
console.log("Pushes the dc_heroes into the marvel Heroes\n ")
marvel_heros.push(dc_heros)
console.log("Marvel_heroes array after pushing dc heroes\n ");
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log("Concatination of Marvel_heroes and dc_heroes\n ",allHeros);
//Push pushes on existing array , concat make new array
// Spreading array - one one element 
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log("Spread of MArvel_heroes and Dc_heroes\n ",all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log("spreading array within array using flat function \n",real_another_array);



console.log(Array.isArray("Dhruv"))
console.log(Array.from("Dhruv"))
console.log(Array.from({name: "Dhruv"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));