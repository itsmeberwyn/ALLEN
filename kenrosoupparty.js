function kenro(lst) {
    res = []

    for (var i = 0; i < lst.length; i++) {
        if (lst[i][1] < 0 || lst[i][2] < 0 || lst[i][0] < 0) {
            res.push('Invalid')
        } else {
            check = Math.floor(lst[i][1]) / Math.floor(lst[i][2]) >= Math.floor(lst[i][0]) ? 'Yes' : 'No'
            res.push(check)
        }
    }

    return res
    return lst[1] / lst[2]
    return lst[1] / lst[2] === lst[0] ? 'Yes' : 'No'
}

let lst = [[2, 4, 2]];
console.log(kenro(lst))