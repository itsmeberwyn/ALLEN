import math
def buy_switches(Red_switch_durability, Blue_switch_durability, gaming_sessions, programming_sessions):
    red_switches_needed = math.ceil(gaming_sessions / Red_switch_durability)
    blue_switches_needed = math.ceil(programming_sessions / Blue_switch_durability)
    return red_switches_needed + blue_switches_needed