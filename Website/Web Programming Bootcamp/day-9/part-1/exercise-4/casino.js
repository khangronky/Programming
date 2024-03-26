let house = 1000;
let player = 100;
let round = 0;

while (true) {
    console.log(`The house has $${house}`);
    console.log(`You have $${player}`);

    if (round === 0) console.log(`Try your luck to win all the money of the house!`);
    else {
        if (player <= 0) {
            console.log("You are out of money! Bye!");
            break;
        }
        else if (house <= 0) {
            console.log("You won all the money of the house! Congratulations!");
            break;
        }
        else {
            let cont = prompt("Do you want to continue?");
            if (cont === "no") {
                console.log("Bye!");
                break;
            }
        }
    }

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

    if (dice1 === dice2 && dice2 === dice3) {
        console.log(`You lost $${bet}`);
        house += bet;
        player -= bet;
    }
    else {
        if (sum >= 4 && sum <= 10 && range === "small") {
            console.log(`You won $${bet}`);
            house -= bet;
            player += bet;
        }
        else if (sum >= 11 && sum <= 17 && range === "big") {
            console.log(`You won $${bet}`);
            house -= bet;
            player += bet;
        }
        else {
            console.log(`You lost $${bet}`);
            house += bet;
            player -= bet;
        }
    }
}