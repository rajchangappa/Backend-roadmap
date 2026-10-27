console.log("--- Exercise 01 ---");
// Create a function to render a name and skills and print using node
const person = "Mugiwara No Luffy";
const skills = [
  "Conqueror's Haki",
  "Observation Haki",
  "Armament Haki",
  "Future site",
];

function introduction() {
  let formatSkills = skills.map((skill) => `${skill}`).join(", ");

  let intro = `Hi! I'm ${person}, I'm gonna be king of pirates!!
        My skills are ${formatSkills}
    `;
  console.log(intro);
}

introduction();

console.log("--- Exercise 02 ---");
// Create a function that takes in a name and wish parameter and print using node

function printWishes(name, wish) {
  console.log(`${name} wishes ${wish}!`);
}

printWishes("Asta", "to become the wizard king");
