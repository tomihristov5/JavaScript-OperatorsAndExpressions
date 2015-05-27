function problem1(number) {
    if (number % 2 === 0) {
        console.log(number + ' is even!');
    }
    else {
        console.log(number + ' is odd');
    }
}

function problem2(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function problem3(height, width) {
    var area = height * width;
    console.log(area);
}

function problem4(number) {
    if (Math.floor((number / 100) % 10) === 7) {
        console.log('Third digit is 7');
    }
    else {
        console.log('Third digit is different');
    }
}

function problem5(number) {
    var numStr = number.toString(2);
    console.log('Number in binary: ' + numStr);
    console.log('Third bit is: ' + numStr[3]);
}

function problem6(pointX, pointY) {
    var zeroX = 0,
        zeroY = 0,
        circleR = 5;
    if ((pointX * pointX) + (pointY * pointY) <= circleR * circleR) {
        console.log('The point is inside the circle!');
    }
    else {
        console.log('The point is outside the circle!');
    }
}

function problem7(number) {
    var prime = true;
    for (var i = 2; i <= Math.floor(Math.sqrt(number)) ; i++) {
        if ((number % i) === 0) {
            prime = false;
        }
    }
    console.log(number + ' is prime: ' + prime);
}

function problem8(a, b, h) {
    var result = (a + b) * h / 2;
    console.log('The area is: ' + result);
}

function problem9(pointX, pointY) {
    var circleX = 1,
        circleY = 1,
        circleR = 3,
        top = 1,
        left = -1,
        width = 6,
        height = 2;
    var insideCircle = ((pointX - 1) * (pointX - 1) + (pointY - 1) * (pointY - 1)) <= circleR * circleR;
    var outsideRectangle = pointX < left || pointX > left + width || pointY > top || pointY < top - height;
    var position = insideCircle && outsideRectangle;
    if (position) {
        console.log('The point is inside the circle and outside the rectangle: YES!');
    }
    else {
        console.log('The point is inside the circle and outside the rectangle: NO!');
    }
}