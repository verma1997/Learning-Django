###Object Oriented Programming##

#Introduction to Classes:

class Sample():     #declaration os a class
    pass            #Just passing the class

x = Sample()
print(type(x))      #checking the type of the class

#Introduction to attributes:
class Dog():

    def __init__(self,breed,name):     #__init__ method for initialization and self : always used which tells that the class defines itself.
        self.breed = breed
        self.name = name

myDog  = Dog(breed = "German Shephard",name = "Sheru")

print(myDog.breed)
print(myDog.name)

#Introduction to Class Object Attribute and defining funtions inside the class:

class Circle():

    pi = 3.14       #Class Object Attribute

    def __init__(self,radius=1):
        self.radius = radius

    def area(self):
        return Circle.pi*(self.radius**2)

    def new_radius(self,new_radius):
        self.radius = new_radius

myArea = Circle()
myArea.new_radius(10)
print(myArea.area())
