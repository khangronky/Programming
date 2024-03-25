let round = 0;

while(true) {
    let house = 1000;
    let player = 100;
    console.log(`The house has $${house}`);
    console.log(`You have $${player}`);
    console.log(`Try your luck to win all the money of the house!`);

    round++;
    console.log(`Round ${round}`);

    let bet = Number(prompt("Place your bet:"));
    console.log(`You bet $${bet}`);

    let range = prompt("Do you want to bet big or small?");

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    console.log(`The dices are ${dice1}, ${dice2}, ${dice3}`);

    let sum = dice1 + dice2 + dice3;
    console.log(`The sum is ${sum}!`);

    if (sum >= 4 && sum <= 10 && range === "small") {
        console.log(`You won $${bet}`);
        house -= bet;
        player += bet;
    }
    if (sum >= 11 && sum <= 17 && range === "big") {
        console.log(`You won $${bet}`);
        house -= bet;
        player += bet;
    }
}