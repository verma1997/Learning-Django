#Dictionaries

myDictionary = {"rollNo":201652019,"name":'Priyanshu Verma',"grades":{'CPI':[6.47,6.82,6.66,6.82]}}
print(myDictionary)
print(myDictionary['grades']['CPI'][1])

#Dictionaries are mutable

myDictionary = {'bfast':'parantha','lunch':'rajma chawal'}
print(myDictionary['lunch'])
myDictionary['lunch'] = 'chhole bhature'
print(myDictionary['lunch'])
myDictionary['dinner'] = 'chicken'
print(myDictionary)
