function uglyNumber(order) {
    //should return the nth ugly number
    var i = 1;

    // ugly number count
    var count = 1;

    // check for all integers
    // until count becomes n
    while (order > count) {
        i++;
        if (is_Ugly(i) == 1)
            count++;
    }
    return i;
}

function maxDivide(a, b) {
    while (a % b == 0)
        a = a / b;
    return a;
}

function is_Ugly(no) {
    no = maxDivide(no, 2);
    no = maxDivide(no, 3);
    no = maxDivide(no, 5);

    return (no == 1) ? 1 : 0;
}

function isUgly(number) {
    //scored
    //return true if number is an ugly number, otherwise false
    if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
        return true;
    }
    return false;
}

// console.log(isUgly(7))
// console.log(isUgly(36))
console.log(uglyNumber(150))