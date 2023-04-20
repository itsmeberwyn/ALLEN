function present(length, width, height) {
    let arr = [length, width, height];
    arr = arr.sort((a, b) => {
        return a - b
    })
    return (arr[0] * 4) + (arr[1] * 2) + (arr[2] * 2) + 20;
}

console.log(present(30, 40, 50));