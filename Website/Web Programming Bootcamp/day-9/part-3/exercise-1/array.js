var fruit = ["Banana", "Apples", "Oranges", "Blueberries"];
fruit.splice(0, 1);
fruit.sort();
fruit.push("Kiwi");
fruit.splice(0, 1);
fruit.reverse();
console.log(fruit);

var fruit2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
var orange = fruit2[1][1];
console.log(orange);