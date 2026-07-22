# question 1
class report:
    def __init__(self,owner,text):
        self.owner=owner
        self.text=text
    def build(self):
        return f"Report:\n{self.text}\n     report by:{self.owner}"

class saver():
    def __init__(self,report,filname):
        self.report=report
        self.filname=filname
       

    def save(self):
        with open(self.filname,'w')as rp:
            rp.write(self.report.build())
        print("saved successfully")

class Email(saver):
    def __init__(self, report,filname):
        self.report=report
        self.filname=filname

    def sentEmail(self):
        print (f"owner {self.report.owner} your report has been saved at {self.filname}")

rep=report("Alex","report is built")
fp="d6rp.txt"
sv=saver(rep,fp)
sv.save()
em=Email(rep,fp)
em.sentEmail()

#     ----------------------------------------------------------------------
#  question 2
from abc import ABC , abstractmethod
class shape(ABC):
    @abstractmethod
    def area(self):
        pass

class rectangle(shape):
    def __init__(self,length,width):
        self.length=length
        self.width=width

    def area(self):
        return self.width*self.length
    
class square(shape):
    def __init__(self,side1):
        self.side1=side1
        

    def area(self):
        return self.side1*self.side1

rec=rectangle(5,5)
print(rec.area())


# ---------------------------------------
#  question 3

class  AppSettings:
    _instance=None

    def __new__(cls):
        if cls._instance is None:
            cls._instance=super().__new__(cls)
            cls._instance.currency='ETB'

        return cls._instance
    
x=AppSettings()
y=AppSettings()
print( x is y)

#  -------------------------------------
# question 4
from abc import ABC, abstractmethod

class shape(ABC):
    @abstractmethod
    def area(self):
        pass
class circle(shape):
    def __init__(self,radius):
        self.radius=radius

    def area(self):
        return 3.14 *(self.radius**2)
class square(shape):
    def __init__(self,side):
        self.side=side

    def area(self):
        return self.side*self.side
    
class triangle(shape):
    def __init__(self,base ,height):
        self.base=base
        self.height=height

    def area(self):
        return (self.base*self.height)/2

class  shapefactory:
    @staticmethod
    def create(kind, *args):
        if kind=="circle":
            return circle(*args)
        elif kind =="square":
            return square(*args)
        elif kind=="triangle":
            return triangle(*args)
        else:
            return "Please make sure you insert circle,square or triangle"
        
sqr=shapefactory.create("square",2)
tri=shapefactory.create("circle",3)
print(tri.area())
print(sqr.area())

#      -------------------------------------------------------------------------
#  question 5
from abc import ABC,abstractmethod
class Subscriber(ABC):
    @abstractmethod
    def update(self, news):
        pass

class NewsAgency:
    def __init__(self):
        self._subscribers=[]
        self._latestNews=""

    def subscribe(self,subscriber: Subscriber):
        if subscriber not in self._subscribers:
            self._subscribers.append(subscriber)

    def unsubscribe(self, subsciber: Subscriber):
        if subsciber in self._subscribers:
            self._subscribers.remove(subsciber)


    def notify(self):
        for subs in self._subscribers:
            subs.update(self._latestNews)
    def set_news(self,headline:str):
        self._latestNews=headline
        self.notify()



class newssubs(Subscriber):
    def __init__(self,user:str):
        self.user=user

    def update(self,news:str):
        print(f"notification for {self.user}\n{news}")



z=NewsAgency()
sub=newssubs("ab")
z.subscribe(sub)
z.set_news("huray")
   
        