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
    def get_transaction(self):
            amounts=[]
            for tx in self.history:
                if tx["type"]=="deposite":
                    amounts.append(+tx["amount"])

                elif tx["type"]=="withdraw":
                    amounts.append(-tx["amount"])

            return amounts

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
    
    def top_by_balance(self,n):
        top=sorted(self.acc_dict.values(),key=lambda a:a.balance, reverse=True)
        return top[:n]
    
    def binary(self,item,target):
        low=0
        high=len(item)-1


        while low<=high:
            mid=(low+high)//2
            if item[mid].account_number==target:
                return f"your account exists under username {item[mid].owner}"
            
            elif item[mid].account_number>target:
                high=mid-1
            elif item[mid].account_number<target:
                low=mid+1
        return f"your account doesn't exist in our system"
    
    def find_bynum(self,num):
        items=sorted(self.acc_dict.values(),key=lambda a:a.account_number)
        i=self.binary(items,num)
        return i

    def recursiveSUm(self,txList):
        if not txList:
            return 0

        return txList[0]+self.recursiveSUm(txList[1:])

    def total_transactions(self,num):
        acc=self.find(num)

        if not acc:
            return f"Account{num} doesn;t exist in our system"

        amounts=acc.get_transaction()
        total=self.recursiveSUm(amounts)
        return f"Total transaction for account {num}: {total}"
    def listall(self):
        for acc in self.acc_li:
            print(acc.statement())
            
        
rg=Accountregistry()
account=AccountFactory.create("cr","Abebe",1001,1000)
rg.add(account)
print(rg.listall())

opp=rg.find(1001)
search=rg.find_bynum(1001)
print(search)
opp.subscribe(SMSAlert())

print(opp.withdraw(500))

print(rg.total_transactions(1001))

