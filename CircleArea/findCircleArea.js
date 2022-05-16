const arguments = process.argv.slice(2);

function findCircleArea(radius) {
    const Area = Math.PI * Math.pow(radius, 2);
    console.log(`Area of circle which is radius ${radius}: ${Area}`);
}

findCircleArea(arguments[0]);