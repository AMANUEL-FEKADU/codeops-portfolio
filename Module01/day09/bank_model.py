from abc import ABC,abstractmethod
from collections import deque
class Subscriber(ABC):
    @abstractmethod
    def update(self,event):
        pass

class SMSAlert(Subscriber):
    def update(self, event):
        print(f'SMA alert: you have {event}')
class AuditLog(Subscriber):
    def update(self,event):
        print(f'[log] {event}')

class BankConfig:
    _instance=None
    def __new__(cls):
        if cls._instance is None:
            cls._instance=super().__new__(cls)
            cls._instance.rate=0.5
            cls._instance.overdraft=500
        return cls._instance

class Account:
    def __init__(self,owner,account_number,balance):
        self.owner=owner
        self.account_number= account_number
        self.__balance=balance
        self._subscribers=[]
        self.history=deque()

    

    def subscribe(self, subscriber: Subscriber):
        if subscriber not in self._subscribers:
            self._subscribers.append(subscriber)

    def _notify(self,event):
        for subs in self._subscribers:
            subs.update(event)
    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, new_balance):
        self.__balance = new_balance

    def withdraw(self,amount):
        if amount > self.__balance or amount<=0:
            return "please make sure you have a postive number and suffcient balance"
        self.__balance-=amount
        self._notify(f"-{amount}ETB")
        self.history.append({"owner":self.owner,"type":"withdraw","amount":amount})
        return f"Successfully withdrew {amount} ETB"


    def deposit(self,amount):
        if amount<=0:
            return "please enter a postive number"
        self.__balance+=amount
        self._notify(f'+{amount}ETB')
        self.history.append({"owner":self.owner,"type":"deposite","amount":amount })
        return f"Successfully deposited {amount} ETB"
   
    def undo(self):
        if not self.history:
            return " no Transaction"
        
        last_tx=self.history.pop()

        if last_tx["type"]=="deposite":
            self.__balance-=last_tx["amount"]
            self._notify(f"undo +{last_tx['amount']}ETB")
            return f"undo the deposite transaction\nyour new balance is {self.__balance}"
        
        elif last_tx["type"]=="withdraw":
            self.__balance+=last_tx["amount"]
            self._notify(f"undo -{last_tx['amount']}ETB")
            return f"undo the with transaction\nyour new balance is {self.__balance}"
   
    def statement(self):
        return f"Name:{self.owner}\naccount number:{self.account_number}\nbalance:{self.__balance}"



        
class SavingsAccount(Account):
    def __init__(self,owner,account_number,balance):
        super().__init__(owner,account_number,balance)
        config=BankConfig()
        self.rate=config.rate

    def add_interest(self):
       
       
        interest=self.balance * self.rate
        self.balance+=interest
        return f"Your interesr will be {interest}ETB"
    
   
    def statement(self):
        return f"Account type: Savings\n owner:{self.owner}\n account_number:{self.account_number}\nbalance:{self.balance}"
class CurrentAccount(Account):
    def __init__(self, owner, account_number, balance):
        super().__init__(owner, account_number, balance)
        config=BankConfig()
        self.overdraft=config.overdraft

  
    def withdraw(self, amount):
        if amount <=0:
            return "please enter postive number"
        if amount>(self.balance + self.overdraft):
            return "transaction rejected, make sure you have a sufficent balance and don't exceed the 1000ETB draft limit"
        self.balance-=amount
        self._notify(f'-{amount}ETB')
        self.history.append({"owner":self.owner,"type":"withdraw","amount":amount })
       
        return "withdrawal successful;;"

   
    def statement(self):
        return f"Account type: Current\n owner:{self.owner}\n account_number:{self.account_number}\n balance:{self.balance}ETB"   

class AccountFactory:
    @staticmethod
    def create(kind,owner,account_number,balance):
        if kind=="cr":
            return CurrentAccount(owner,account_number,balance)
        elif kind=='sv':
            return SavingsAccount(owner,account_number,balance)
        else:
            return "Error"
        
class Accountregistry:
    def __init__(self):
        self.acc_dict={}
        self.acc_li=[]

    def add(self,acc):
        self.acc_dict[acc.account_number]=acc
        self.acc_li.append(acc)

    def find(self,acc_num):
        return self.acc_dict.get(acc_num)    
    
    def listall(self):
        for acc in self.acc_li:
            print(acc.statement())
            
        
class Branch:  
    def __init__(self, name):
        self.name = name                      
        self.accounts = []                    
        self.children = []                   

    def add_account(self, account):           
        self.accounts.append(account)

    def add_child(self, branch):              
        self.children.append(branch)

    def total_balance(self):                  
        
        total = sum(acc.balance for acc in self.accounts)  

       
        for child in self.children:                        
            total += child.total_balance()                

        return total

def bfs(transfers, start):                   
    visited = set()                           
    queue = deque([start])                    
    visited.add(start)                        

    while queue:                               
        curr = queue.popleft()                
        for recipient in transfers.get(curr, []): 
            if recipient not in visited:      
                visited.add(recipient)       
                queue.append(recipient)       

    return visited



rg = Accountregistry()


acc1001 = AccountFactory.create("cr", "Abebe", 1001, 1000)   
acc1002 = AccountFactory.create("sv", "Kebede", 1002, 2500)  
acc1003 = AccountFactory.create("cr", "Chala", 1003, 1500)   
acc1004 = AccountFactory.create("sv", "Tigist", 1004, 3000)  

rg.add(acc1001)
rg.add(acc1002)                                               
rg.add(acc1003)                                               
rg.add(acc1004)                                               


head_office = Branch("Head Office")                           
head_office.add_account(acc1001)                             

region_addis = Branch("Addis Ababa Region")                  
region_addis.add_account(acc1002)                             

branch_bole = Branch("Bole Branch")                         
branch_bole.add_account(acc1003)                              
branch_bole.add_account(acc1004)                             


region_addis.add_child(branch_bole)                           
head_office.add_child(region_addis)                           

print("Recursive total balance")
print(f"Bole branch total: {branch_bole.total_balance()} ETB")       
print(f"Addis region total: {region_addis.total_balance()} ETB")    
print(f"Head office total: {head_office.total_balance()} ETB\n")     



transfers = {                                                 
    1001: [1002, 1003],                                       
    1002: [1004],                                           
    1003: [],                                                 
    1004: [1001]                                             
}

print("Bfs")
reachable = bfs(transfers, 1001)                             
print(f"Accounts reachable from 1001: {reachable}")
