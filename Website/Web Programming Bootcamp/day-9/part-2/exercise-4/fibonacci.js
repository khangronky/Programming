function fibonacci(n) {
    let a = 1;
    let b = 1;
    if (n === 1) return a;
    else if (n === 2) return b;
    else for (let i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return c;
}

let n = prompt("Enter the month: ");
console.log(`The total number of pairs of rabbits at the month ${n} is ${fibonacci(n)}`);