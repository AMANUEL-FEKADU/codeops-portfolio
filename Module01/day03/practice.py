# question 1

cities = ['paris', 'london', 'beiging', 'doha', 'paris', 'dakar', 'london']


distinct_cities = set(cities)


for city in distinct_cities:
    print(city)


print('total', len(distinct_cities))


#---------------------------------------

# question 2
grocery_items = {'potato': 80,'rice': 120,'onion': 70,'tomato': 95,'garlic': 150
}

for item, price in grocery_items.items():
    print(f"{item.capitalize()}: {price} ETB")



#   --------------------------------

# question 3

prices = [100, 250, 400, 80]
taxed = [i * 1.15 for i in prices]
cheap_items = [i for i in prices if i < 200]

print(taxed)
print(cheap_items)

#------------------------------------
# question 4
with open('names.txt', 'w') as n:
    n.write("abebe\nkebede\naster")


with open('names.txt', 'r') as n:
    t = n.read()
    print(t)

#------------------------------------------------
# question 5
try:
    num = int(input('Enter a number: '))
    result = 1000 / num
    print(result)
except ZeroDivisionError:
    print("Can't divide by zero!")
except ValueError:
    print('Wrong value! Please enter a valid integer.')