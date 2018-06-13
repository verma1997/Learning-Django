###FUNCTIONS###

def func(num = 10):
    """
    This Is A Docstring. A Comment
    """
    return "Hi ! I am a python function and my number is {n}".format(n = num)

result = func()
print(result)
#or
def addNum(num1,num2):
    if type(num1)==type(num2)==type(5):
        return num1+num2
    else:
        return "sorry!"

sum = addNum("5",4)
print(sum)

###Lambda Expression###

#Filters

myList = [1,2,3,4,5,6,7,8,9,10]

def even(num):
    return num%2==0

func = filter(even,myList)
print(list(func))

#or

result = filter(lambda num:num % 2==0,myList)
print(list(result))
