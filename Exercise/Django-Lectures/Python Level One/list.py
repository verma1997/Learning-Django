#LISTS

myList = ['a','b','c']
print(myList)

#Nesting of LIST
myList = ["Priyanshu Verma",201652019,[6.47,6.82,6.66,6.82]]
print(myList)

#Length of the LIST
length = len(myList)
print(length)

#Slicing of LIST
x = myList[:3]
print(x)

#Re-assignment
newList = ['a','b','c','d','e','f']
newList[0] = "One"
print(newList)

#Append
newList.append("New Item")
#or
item = "Item"
newList.append(item)

#The problem with append is that it copies the whole data as it is. For example:
# if we write newList.append(['x','y','z']), then the output will be
# ['a',b],'c','d','e','f',['x','y','z']. That's why we use extend()

#Extend
item = ['x','y','z']
newList.extend(item)

#POP
x = newList.pop()   #returns the last element of the list
print(x)
#or
x = newList.pop(1)  #return the indexed element from the list
print(x)

#Reverse
list = [1,8,6,45,20,36]
x = list.reverse()

#Sorting
x = list.sort()

#Matrix
matrix = [[1,2,3],[4,5,6],[7,8,9]]
