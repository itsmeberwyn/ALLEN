// Ariessa wants to travel around Iloilo City but she has a problem, she's not a native and has no idea what the rates are. Help her out by writing a basic function that takes in a map of available transportation that has a key of the transportation mode and an array value containing how many km are free and the fare for excess kms. In addition, the function should also take in a string containing what Ariessa has to ride and how many kilometers she has to travel, and the baseline fare; after which, it should return the amount of money she has to pay.


// const map = {
//     "Jeepney": [5, 2.5],
//     ....
// }

// const travelString = "Jeepney7"

// const baseFare = 10;

// const result = traveller(map, travelString, baseFare); // Should equal 15.

{/* <ol>
<li>The travelString is km by default, if it includes mi then conversion (<code>1.609344 km = 1 mi</code>) must be taken into account.</li>
<li>All values must be rounded up.</li>
<li>All values are case-insensitive.</li>
</ol> */}

// 7 - 5 = 2 * 2.5 = 5 + 10
// 12 - 5 = 7 * 2.5 = 17.5 + 10 = 27.5

function traveller(map, travelString, baseFare) {
    let maplower = lowercaseKeys(map)
    extracttravelString = travelString.toLowerCase().split(/(\d+)/)

    var path = extracttravelString[1]

    if (extracttravelString[2].length > 0 && extracttravelString[2].toLowerCase() === 'mi') {
        path = (extracttravelString[1] * 1.609344)
    }

    if(maplower[extracttravelString[0]][0] < 0){
        
    }
    let removeFreeFare = path - maplower[extracttravelString[0]][0]
    let result = removeFreeFare * maplower[extracttravelString[0]][1]

    console.log(Math.ceil(result + baseFare))

    if(Math.ceil(result + baseFare) < 1){
        return baseFare
    }
    
    return Math.ceil(result + baseFare)
}

function lowercaseKeys(obj) {
    return Object.keys(obj).reduce((accumulator, key) => {
        accumulator[key.toLowerCase()] = obj[key];
        return accumulator;
    }, {});
}

const map = {
    "Jeepney": [5, 2.5],
}

const travelString = "Jeepney7mi";
const baseFare = 10;

const result = traveller(map, travelString, baseFare);