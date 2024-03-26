let items = [
    { type: 'hat', points: 10 },
    { type: 'shoes', points: 20 },
    { type: 'hat', points: 5 },
    { type: 'scarf', points: 15 },
    { type: 'shoes', points: 10 }
];

function calcPoints(arr) {
    let points = {};
    arr.forEach(item => {
        if (item.type in points) {
            points[item.type] += item.points;
        }
        else points[item.type] = item.points;
    });
    return points;
}

console.log(calcPoints(items));