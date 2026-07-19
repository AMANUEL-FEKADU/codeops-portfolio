# . Book class.
class Book:
    def __init__(self,title,author,pages):
        self.title=title
        self.author=author
        self.pages=pages

    def describe(self):
        return f"this book titled {self.title} is written by {self.author} having {self.pages} pages"
    

dwk=Book("Diary of wimpy kid","John smith",240)
hp=Book("Harry Potter","joe",500)

print(dwk.describe())
print(hp.describe())

# . Product class.

class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity

    @property
    def quantity(self):
        return self.__quantity
    
    @quantity.setter
    def quantity(self,value):
        if value<0:
            raise ValueError("Quantity cannot be less than 0!")
        self.__quantity=value

    def restock(self,n):
        if self.__quantity<5:
            self.__quantity+=n
            return "restocked succesfully"
        return "restock not needed"

    def sell(self, n):
        if 0 < n <= self.__quantity:
            self.quantity-=n
            total_price=n*self.price
            return f"item:{self.name}\nsold quantity:{n}\ntotal price:{total_price}"
        return "error while selling"
        
phone=Product('iphone',150000,12)
shoe=Product('shoe',2000,40)
chair=Product('chair',1000,8)
print(phone.sell(5))
print(phone.quantity)
