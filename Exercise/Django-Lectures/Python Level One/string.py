#STRINGS

#Basic
myName = 'Priyanshu Verma'
print(myName)

#Indexing
print(myName[4])
print(myName[5])
print(myName[0])

#Slicing
print(myName[3:])   #print the string from 3rd index onwards.
print(myName[:4])   #print the string upto 3rd index.
print(myName[2:7])  #print the string from 2nd index to 6th index.
print(myName[:])    #print the whole string.
print(myName[::2])  #print character of the string skiping one character.

#Basic Methods
x = myName.capitalize();    #capitalizes the first character of the string
print(x)
x = myName.upper();
print(x)
x = myName.lower();
print(x)
x = myName.split();         #split the string from the spaces.
print(x)
x = myName.split('e');      #split the string from specific character
print(x)

#Print Formatting
x = "My First Name is {} and my Last Name is {}".format("Priyanshu","Verma")
print(x)
#OR
x = "My First Name is {first} and my Last Name is {last}.".format(first="Priyanshu",last="Verma")
print(x)
