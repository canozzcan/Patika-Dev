function circleArea(radius) {
    const Area = Math.PI * Math.pow(radius, 2);
    console.log(`Area of circle which is radius ${radius}: ${Area}`);
}

function circleCircumference(radius) {
    const Circumference = 2 * Math.PI * radius;
    console.log(`Circumference of circle which is radius ${radius}: ${Circumference}`);
}


module.exports = {
    circleArea,
    circleCircumference
};