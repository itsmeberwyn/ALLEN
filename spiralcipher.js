class Route {
    static Encrypt(plaintext, w, s, r) {
        if (w < 2 || plaintext.length % w !== 0) {
            return "Cannot encrypt"
        }

        // TL top left, TR top right, BL bottom left, BR bottom right
        if (s !== 'TL' && s !== 'TR' && s !== 'BL' && s !== 'BR') {
            return "Cannot encrypt"
        }

        // CW clockwise, CC counter clockwise
        if (r !== 'CC' && r !== 'CW') {
            return "Cannot encrypt"
        }

        var splitArr = this.splitNChars(plaintext, w)
        var arr = []

        for (var i = 0; i < splitArr.length; i++) {
            arr.push(splitArr[i].split(""))

        }

        return this.spiraltraverse(arr)
    }

    static splitNChars(txt, num) {
        var result = [];
        for (var i = 0; i < txt.length; i += num) {
            result.push(txt.substr(i, num));
        }
        return result;
    }

    static spiraltraverse(inmatrix) {
        if (!inmatrix.length) return [];
        let res = "";
        // const dirs = [
        //     [0, 1],
        //     [1, 0],
        //     [0, -1],
        //     [-1, 0],
        // ];
        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        const scope = [inmatrix[0].length, inmatrix.length - 1];
        let d = 0,
            r = 0,
            c = -1;
        while (scope[d % 2] > 0) {
            for (let i = 0; i < scope[d % 2]; i++) {
                r += dirs[d][0];
                c += dirs[d][1];
                res += inmatrix[r][c];
            }
            scope[d % 2]--;
            d = (d + 1) % 4;
        }
        return res;
    }
}

// console.log(Route.Encrypt('IDONTCAREHOWYOUGETHEREJUSTDOIT', 7, 'TL', 'CC'))
// console.log(Route.Encrypt('IDONTCAREHOWYOUGETHEREJUSTDOIT', 1, 'TL', 'CC'))
console.log(Route.Encrypt('IDONTCAREHOWYOUGETHEREJUSTDOIT', 5, 'TL', 'CC'))