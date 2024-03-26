let s = prompt("Enter the seconds: ");

let h = Math.floor(s / 3600);
let m = Math.floor((s % 3600) / 60);
let sec = s % 60;

console.log(`${h}:${m}:${sec}`);