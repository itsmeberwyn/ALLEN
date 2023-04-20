function trick_or_treat(candies, threshold) {
    sortcandies = Object.assign({}, candies);
    var mappedHash = Object.keys(sortcandies).sort(function (a, b) {
        return sortcandies[a] - sortcandies[b];
    })

    sum = 0;
    result = []
    for (let i of mappedHash) {
        if (sum + sortcandies[i] <= threshold) {
            sum += sortcandies[i];
            result.push(parseInt(i))
        }
    }

    return result.sort()
}

// console.log(trick_or_treat([6, 3, 8, 9, 1], 5));
console.log(trick_or_treat([33, 20, 12, 19, 29], 33));
