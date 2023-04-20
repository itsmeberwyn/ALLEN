// Have you ever tried stacking cubes? It might be quite boring as you are just basically stacking them up, but have you wondered the total number of cubes used to stack them up? Kobe, a guy who likes rubik's cube, then got interested to it. He thought of this as he got fascinated of the small cubes that make it. Due to this, he bought many rubik's cubes, separated them into 1x1x1 cubes then made those cubes. He then planned that he will be stacking will be ranging from a x a x a to b x b x b squares. Due to this, help him count the number of 1x1x1 squares such that he could approximate the number of rubik's cubes he will buy. Return value should be mod 1000003.

function stackcubes(a, b) {
    return (b * (b + 1) / 2) * (b * (b + 1) / 2) - ((a - 1) * a / 2) * ((a - 1) * a / 2)
}
console.log(stackcubes(4, 5)) //189
console.log(stackcubes(1, 5)) //225
// console.log(stackcubes(100000, 1000000000000000000)) //225