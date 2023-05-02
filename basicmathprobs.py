import operator
import re

ops = {
    '+' : operator.add,
    '-' : operator.sub,
    '*' : operator.mul,
    '/' : operator.truediv,  # use operator.div for Python 2
    '%' : operator.mod,
    '^' : operator.xor,
}

def basicmath(word):
    opt = *("1 + 3".split())
    # op1, op2 = int(op1), int(op2)
    # return ops[oper](op1, op2)

# def eval_binary_expr(op1, oper, op2):
#     op1, op2 = int(op1), int(op2)
#     return ops[oper](op1, op2)

print(basicmath(""));