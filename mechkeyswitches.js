function buy_switches(Red_switch_durability, Blue_switch_durability, gaming_sessions, programming_sessions) {
    var a = Math.ceil(gaming_sessions / Red_switch_durability)
    var b = Math.ceil(programming_sessions / Blue_switch_durability)

    return a + b
}

console.log(buy_switches(56, 60, 120, 450))