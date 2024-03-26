let myTeam = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

let arr = [];
myTeam.forEach((player) => {
    arr.push(player.username + "!");
});
console.log(arr);

arr = [];
myTeam.forEach((player) => {
    arr.push(player.username + "?");
});
console.log(arr);

arr = [];
myTeam.forEach((player) => {
    if (player.team === "red") arr.push(player);
});
console.log(arr);

let totalScore = myTeam.reduce((acc, cur) => {
    return Number(acc) + cur.score;
}, "");
console.log(totalScore);