# from abc import ABC,abstractmethod
# class Subscriber(ABC):
#     @abstractmethod
#     def update(self,event):
#         pass

# class SMSAlert(Subscriber):
#     def update(self, event):
#         print(f'SMA alert: you have {event}')
# class AuditLog(Subscriber):
#     def update(self,event):
#         print(f'[log] {event}')

# class BankConfig:
#     _instance=None
#     def __new__(cls):
#         if cls._instance is None:
#             cls._instance=super().__new__(cls)
#             cls._instance.rate=0.5
#             cls._instance.overdraft=500
#         return cls._instance

# class Account:
#     def __init__(self,owner,account_number,balance):
#         self.owner=owner
#         self.account_number= account_number
#         self.__balance=balance
#         self._subscribers=[]

    

#     def subscribe(self, subscriber: Subscriber):
#         if subscriber not in self._subscribers:
#             self._subscribers.append(subscriber)

#     def _notify(self,event):
#         for subs in self._subscribers:
#             subs.update(event)
#     @property
#     def balance(self):
#         return self.__balance

#     @balance.setter
#     def balance(self, new_balance):
#         self.__balance = new_balance

#     def withdraw(self,amount):
#         if amount > self.__balance or amount<=0:
#             return "please make sure you have a postive number and suffcient balance"
#         self.__balance-=amount
#         self._notify(f"-{amount}ETB")
#         return f"Successfully withdrew {amount} ETB"


#     def deposit(self,amount):
#         if amount<=0:
#             return "please enter a postive number"
#         self.__balance+=amount
#         self._notify(f'+{amount}ETB')
#         return f"Successfully deposited {amount} ETB"
#     def statement(self):
#         return f"Name:{self.owner}\naccount number:{self.account_number}\nbalance:{self.__balance}"



        
# class SavingsAccount(Account):
#     def __init__(self,owner,account_number,balance):
#         super().__init__(owner,account_number,balance)
#         config=BankConfig()
#         self.rate=config.rate

#     def add_interest(self):
       
       
#         interest=self.balance * self.rate
#         self.balance+=interest
#         return f"Your interesr will be {interest}ETB"
    
   
#     def statement(self):
#         return f"Account type: Savings\n owner:{self.owner}\n account_number:{self.account_number}\nbalance:{self.balance}"
# class CurrentAccount(Account):
#     def __init__(self, owner, account_number, balance):
#         super().__init__(owner, account_number, balance)
#         config=BankConfig()
#         self.overdraft=config.overdraft

  
#     def withdraw(self, amount):
#         if amount <=0:
#             return "please enter postive number"
#         if amount>(self.balance + self.overdraft):
#             return "transaction rejected, make sure you have a sufficent balance and don't exceed the 1000ETB draft limit"
#         self.balance-=amount
#         self._notify(f"-{amount}ETB")
#         return "withdrawal successful;;"

   
#     def statement(self):
#         return f"Account type: Current\n owner:{self.owner}\n account_number:{self.account_number}\n balance:{self.balance}ETB"   

# class AccountFactory:
#     @staticmethod
#     def create(kind,owner,account_number,balance):
#         if kind=="cr":
#             return CurrentAccount(owner,account_number,balance)
#         elif kind=='sv':
#             return SavingsAccount(owner,account_number,balance)
#         else:
#             return "Error"
        









# class AccountRegistry:
#     accountList=[]

#     def addacount(self,name,acc,bal):
#         try:
#             name=input("Enter your name")
#             acc=input("aenter an account number: ")
#             bal=int(input("enter your balance"))
#             self.accountList.append({name,acc,bal})
#         except ValueError:
#             return "please ensert a string for balance"
        
#     def searchacc(self,acc_num):
#         for i in self.accountList:
#             if self.accountList[acc_num] in self.account_number:
#                 return f' your account details\n'
#     def seall(self):
#         for i in self.accountList:
#             return i
        
# myacc=AccountRegistry()
# myacc.addacount("abebe","1011",2450)
# print(myacc.seall())
        

# newlist=[1,2,3,4,5,6,7,8,9,10]
# # def linear(target):
# #     for i,x  in enumerate(newlist):
# #         if x == target:
# #             return f'found at index {i}'
# #     return "not in list" 
    
# # print(linear(5))

# def binary(target):
#     count=1
   
#     start=0
#     end=len(newlist)-1
#     while start<=end:
#         mid=len(newlist)//2
#         if newlist[mid]==target:
#             return f"target found at seggregation {count}"
#         elif newlist[mid]<target:
#             start=mid+1
           
#             count+=1
#         elif newlist[mid] > target:
#             end=mid-1
#             count+=1
#     return -1
        
            

print(binary(3))
    