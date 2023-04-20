
MOD = 1000003

def sum_of_squares(n):
    return (n*(n+1)//2)**2


def stackcubes(a, b):
    s = 0
    for n in range(a, b+1):
        s += sum_of_squares(n)
        s %= MOD
    return s

a = 3
b = 5
total_cubes = stackcubes(a, b)
print(total_cubes)