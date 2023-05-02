// class Numbers {
//   static GetComposite(min, max) {
//     let res = [];
//     let hcn = this.findSuperiorHighlyCompositeNumbers(min, max)
//     for (var i = 0; i < hcn.length; i++) {
//       // res.push(hcn[i])
//       if (i % 2 == 0) {
//         console.log(i,hcn[i])
//         res.push(i * hcn[i])
//       } else {
//         console.log(i,hcn[i])
//         res.push(i + hcn[i])
//       }
//     }
//     return res
//   }

//   static countDivisors(n) {
//     return this.findFactors(n).length;
//   }

//   static findFactors(n) {
//     let factors = [];
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         factors.push(i);
//         if (i !== n / i) {
//           factors.push(n / i);
//         }
//       }
//     }
//     return factors.sort((a, b) => a - b);
//   }

//   static isHighlyCompositeNumber(n) {
//     for (let i = n - 1; i >= 1; i--) {
//       if (this.countDivisors(n) <= this.countDivisors(i)) {
//         return false;
//       }
//     }
//     return true;
//   }

//   static isSuperiorHighlyCompositeNumber(n) {
//     for (let i = n - 1; i >= 1; i--) {
//       if (this.isHighlyCompositeNumber(i) && this.countDivisors(n) <= this.countDivisors(i)) {
//         return false;
//       }
//     }
//     return true;
//   }

//   static findSuperiorHighlyCompositeNumbers(min, limit) {
//     let superiorHighlyCompositeNumbers = [];
//     for (let i = min; i <= limit; i++) {
//       if (this.isHighlyCompositeNumber(i) && this.isSuperiorHighlyCompositeNumber(i)) {
//         superiorHighlyCompositeNumbers.push(i);
//       }
//     }
//     return superiorHighlyCompositeNumbers;
//   }
// }

class Numbers {
  static GetComposite(min, max) {
    let res = [];
    let hcn = this.findSuperiorHighlyCompositeNumbers(min, max)

    for (var i = 0; i < hcn.length; i++) {
      res.push(hcn[i])

      // if (i % 2 == 0) {
      //   res.push(i * hcn[i])
      // } else {
      //   res.push(i + hcn[i])
      // }
    }
    return res
  }

  static findFactors(n) {
    let factors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        factors.push(i);
        if (i !== n / i) {
          factors.push(n / i);
        }
      }
    }
    return factors.sort((a, b) => a - b);
  }

  static countDivisors(n, cache = {}) {
    if (n in cache) {
      return cache[n];
    }

    const factors = this.findFactors(n);
    cache[n] = factors.length;
    return cache[n];
  }

  static findHighlyCompositeNumbers(min, limit) {
    const cache = {};
    let maxDivisors = 0;
    let highlyCompositeNumbers = [];

    for (let i = min; i <= limit; i++) {
      const divisors = this.countDivisors(i, cache);

      if (divisors > maxDivisors) {
        maxDivisors = divisors;
        highlyCompositeNumbers.push(i);

      }
    }
    return highlyCompositeNumbers;
  }

  static isSuperiorHighlyCompositeNumber(min, n, highlyCompositeNumbers, cache) {
    for (let i = 0; i < highlyCompositeNumbers.length; i++) {
      const m = highlyCompositeNumbers[i];
      // console.log(m, n)
      if (m >= n) {
        break;
      }
      // console.log(this.countDivisors(n, cache) + " + " + n + " + " + this.countDivisors(m, cache) + " " + m)
      if (this.countDivisors(n, cache) <= this.countDivisors(m, cache)) {
        return false;

      }
    }
    return true;
  }

  static findSuperiorHighlyCompositeNumbers(min, limit) {
    const cache = {};
    const highlyCompositeNumbers = this.findHighlyCompositeNumbers(min, limit);
    let superiorHighlyCompositeNumbers = [];
    let i = 1;
    if (min < 10) {
      i = 0
    }
    for (i; i < highlyCompositeNumbers.length; i++) {
      const n = highlyCompositeNumbers[i];
      console.log(n)
      if (this.isSuperiorHighlyCompositeNumber(min, n, highlyCompositeNumbers, cache)) {
        superiorHighlyCompositeNumbers.push(n);
      }
    }

    return superiorHighlyCompositeNumbers;
  }
}

// console.log(Numbers.GetComposite(1, 6))
// console.log(Numbers.GetComposite(10, 20))
console.log(Numbers.GetComposite(50, 100))


// var detail = false;

// function divisors(n) {
//   var d = 2;
//   if (n == 1) d = 1;
//   var l = [1];
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//       d += 1;
//       l[l.length] = i;
//     }
//   }
//   if (n != 1) l[l.length] = n;
//   return { r: d, n: l };
// }


// function GetComposite(min, max) {
//   var c = 0;
//   var a = 1;
//   for (var n = min; n < max; a++) {
//     if (divisors(a).r > c) {
//       c = divisors(a).r;
//       n++;
//       if (detail) {
//         console.log(divisors(a).n);
//       } else {
//         console.log(divisors(a).r);
//       }
//     }
//   }
// }

// console.log(GetComposite(1, 6))

// function primeFactors(n) {
//   let factors = 1;
//   let divisor = 2;

//   while (n >= 2) {
//     if (n % divisor == 0) {
//       factors = factors * divisor;
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   return factors;
// }

// const randomNumber = 12;
// console.log('Prime factors of', randomNumber + ':', primeFactors(randomNumber))



// console.log(getDivisorsCnt(12))


// function findHighlyCompositeNumber(limit) {
//   let maxDivisors = 0;
//   let highlyCompositeNumber = [];
//   for (let i = 1; i <= limit; i++) {
//     const numDivisors = countDivisors(i);
//     if (numDivisors > maxDivisors) {
//       maxDivisors = numDivisors;
//       highlyCompositeNumber.push(i);
//     }
//   }
//   return highlyCompositeNumber;
// }

// function countDivisors(n) {
//   return findFactors(n).length;
// }

// function findFactors(n) {
//   let factors = [];
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       factors.push(i);
//       if (i !== n / i) {
//         factors.push(n / i);
//       }
//     }
//   }
//   return factors.sort((a, b) => a - b);
// }

// console.log(findHighlyCompositeNumber(6));