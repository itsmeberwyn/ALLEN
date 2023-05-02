function least_clicks(time_desired) {
    time = time_desired.split(':')
    characters = [...time[0].length == 1 ? '0' + time[0] : time[0], ...time[1].length == 1 ? time[1]+'0' : time[1]]

    for (var i = 0; i < characters.length; i++) {
        if (parseInt(characters[i]) > 0) {
            return 4 - i
        }
    }
    return characters
}


console.log(least_clicks("1:1"))