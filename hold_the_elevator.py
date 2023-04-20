# def hold_the_elevator(elevator_1, elevator_2, elevator_3, arrival):
#     if elevator_1 <= 0 or elevator_2 <= 0 or elevator_3 <= 0:
#         return 0

#     elevators = [elevator_1, elevator_2, elevator_3]
#     min_time = min(elevators)

#     if min_time < arrival:
#         waiting_time = min_time + (min_time - arrival)
#     else:
#         waiting_time = min_time - arrival 

#     return abs(waiting_time)


# print(hold_the_elevator(45, 56, 78, 2))
# print(hold_the_elevator(6, 6, 4, 2))
# print(hold_the_elevator(4, 2, 6, 4))
# print(hold_the_elevator(56, 12, 34, 13))
# print(hold_the_elevator(5, -1, 12, 13))
# # print(hold_the_elevator(56, 12, 23, 0))



def counting_zeros(values):
    max_val = str(max(values))
    count = 0
    print(max_val)

    for i in values:
        for j in max_val:
            pass




print(counting_zeros([24, 100, 52, 25]))
print(counting_zeros([0, 33, 700, 1000]))
