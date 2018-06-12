####if-else-if statement:###

if 1 < 2:
    print("True!")

#Nesting
if 30 > 20:
    print("First Block")
    if 30 < 40:
        print("Second Block")

#if-else
if 50 > 10:
    print("Hello")
else:
    print("Bye")

#if-elif:
if 4 < 10:
    print("Yes")
elif 5 > 1:
    print("Again Yes")
else:
    print("Nothing")


###for loops:###
list = [1,2,3,4,5,6]

for num in list:
    print(num)
#or

dict = {"Mohit":1,"Sankalp":2,"Pawan":3}

for item in dict:
    print(item)
    print(dict[item])
#or
#iterate through tuples:
mypairs = [(1,2),(3,4),(5,6)]

for (tup1,tup2)in mypairs:
    print(tup1)
    print(tup2)

###while loops###
i = 1
while i<=5:
    print("i is {}".format(i))
    i = i+1

###Range operator:####
#range() : its basically a generator which generates a range of number.

for item in range(10):
    print(item)

##List Coprehension:##
x = [1,2,3,4]

temp[]

for num in x:
    temp.append(num**2)
    print(temp)

#or

temp = [num**2 for num in x]
print(temp)
