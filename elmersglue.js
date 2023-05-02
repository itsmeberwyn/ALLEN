// const Elmer = (words) => {
//     let temp = ""
//     let target = 0
//     words = words.sort(function (a, b) { return b.length - a.length });
//     for (var i = 0; i < words.length; i++) {
//         if (i !== target) {
//             if (words[target].includes(words[i])) {
//                 // console.log(words[target].includes(words[i]),words[i])
//                 words[target] = words[target].replace(words[i],'');
//                 temp = words[target]
//             }
//         }
//     }
//     if(temp.length !== 0){
//         return "Elmer didn't glued them all"
//     }
// };
const Elmer = (words) => {
    let backup = [...words]
    let result = []
    // words = words.sort(function (a, b) { return a.length - b.length });
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (words[i].includes(words[j]) && i !== j) {
                words[i] = words[i].replace(words[j], '')
            }
        }
    }
    for (var k = 0; k < words.length; k++) {
        if (words[k] === '') {
            result.push(backup[k])
        }
    }

    return result.length > 0 ? result : "Elmer didn't glued them all"
};

const words = [
    "Stack",
    "League",
    "StackingLeague",
    "semi",
    "finals",
];

// const words = [
//     "Stack",
//     "League",
//     "StackLeague",
//     "semi",
//     "Stacksemifinals",
//     "finals",
// ];

console.log(Elmer(words))