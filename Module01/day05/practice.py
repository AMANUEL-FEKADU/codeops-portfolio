from abc import ABC,abstractmethod
class Vehicle(ABC):
    def __init__(self,make,model):
        self.make=make
        self.model=model
    
    @abstractmethod
    def wheels(self):
        pass

    def describe(self):
        print(f'vechile is made by :{self.make}\nits model is: {self.model}')


class Truck(Vehicle):
    def __init__(self, make, model,capacity,num):
        super().__init__(make, model)
        self.capacity=capacity
        self.num=num

    def wheels(self):
         return f"{self.make} Truck has {self.num}"
       


    def describe(self):
        print(f'the truck is made by :{self.make}\nits model is: {self.model}\n capacity:{self.capacity}')

class Car(Vehicle):
    def __init__(self, make, model,num):
        super().__init__(make, model)
        self.num=num

    def wheels(self):
        return f"{self.make} car has {self.num}"

vechils=[
    Truck("isuzu","i8",'40',8),
    Car('BYD',"ELEC",4)
]    

for i in vechils:
    i.describe()
    print(i.wheels())
   
