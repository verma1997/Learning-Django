#INHERITANCE
class Animal():                     ##Base Class

    def __init__(self):
        print("Animal Created")

    def whoAmI(self):
        print("Animal")

    def eat(self):
        print("Eating")


class Dog(Animal):                  ##Inherited Class

        def __init__(self):
        Animal.__init__(self)
        print("Dog Created")

    def bark(self):
        print("Woof Woof!")

    def eat(self):
        print("Dog Eating")             ##Function Overriding


myDog = Dog()
myDog.whoAmI()
myDog.eat()

###Special Methods###

class Book():

    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    #Method __str__ used for string representation:
    def __str__(self):
        return "Title: {}, Author: {}, Pages: {}".format(self.title,self.author,self.pages)

    #__len__ method:
    def __len__(self):
        return self.pages

    #__len__ method:
    def __del__(self):
        print("A book has been destroyed")

obj = Book("Python","Jose",200)
print(obj)
print(len(obj))
