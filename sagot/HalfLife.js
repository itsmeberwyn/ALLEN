// log = Math.abs(Math.log(2) / Math.LN10)
// another = Math.abs(Math.log(112/300) / Math.LN2)
// console.log((180 / another).toFixed(4))

function compute_half_life(NT, NO, T)
{
  if(NT > NO){
    return null
  }
  log = Math.abs(Math.log(2) / Math.LN10)
  another = Math.abs(Math.log(NT/NO) / Math.LN2)
  // console.log((T / another).toFixed(4))
  return parseFloat((T / another).toFixed(4))
}

console.log(compute_half_life(6, 5, 1))