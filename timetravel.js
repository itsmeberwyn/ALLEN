function time_travel(currentDate, referenceDate, memories) {
  if (memories[currentDate] == undefined) {
    return (Object.values(memories)[0])
  }

  for (var key in memories) {
    if(key === currentDate){
      return memories[referenceDate]
    }
    if(key === referenceDate){
      return memories[currentDate]
    }
    // console.log(memories[key])
  }
}

key = "88f8d82"
value = "7beb84d"

data = {
  "1b8fecc": "chore: added path alias",
  "a98c2b6": "refactor: added public routes",
  "7beb84d": "feat: user login connected to backend",
  "88f8d82": "feat: added public route",
  "63ec8e3": "refactor: refactor private routes",
}

result = time_travel(key, value, data)
console.log(result)