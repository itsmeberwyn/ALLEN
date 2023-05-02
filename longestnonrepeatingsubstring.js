class Words {
    static GetLongestSubstring(words) {
        var arr = [];
        var temp = words;
        var str = ''

        for (var i = 0; i < words.length; i++) {
            arr[i] = new Array(words[i].length)
            for (var j = 0; j < words[i].length; j++) {
                // arr[i][j].push(words[i][j]);
                arr[i][j] = (words[i][j]);
                // console.log(words[i][j])
            }
        }

        temp = temp.sort((a, b) => b.length - a.length)

        for (var i = 0; i < temp[0].length; i++) {
            for (var j = 0; j < arr.length; j++) {
                str += arr[j][i] !== undefined ? arr[j][i] : ''
            }
        }

        return this.longestSubstring(str)
    }


    static longestSubstring(string) {
        var max = 0, current_string = "", i, char, pos;

        for (i = 0; i < string.length; i += 1) {
            char = string.charAt(i);
            pos = current_string.indexOf(char);
            if (pos !== -1) {
                // cut "dv" to "v" when you see another "d"
                current_string = current_string.slice(pos + 1);
            }
            current_string += char;
            max = Math.max(max, current_string.length);
        }
        return current_string;
    }


}

// var input = ["qwe", "ert", "uyt"];
var input = ["please", "release", "me let me go"];
console.log(Words.GetLongestSubstring(input))