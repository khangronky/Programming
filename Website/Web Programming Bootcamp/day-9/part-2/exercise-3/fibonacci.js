function fibonacci(n) {
    let a = 0;
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

let n = prompt("Enter the number: ");
console.log(fibonacci(n));