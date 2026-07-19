
class Account:
    def __init__(self,owner,account_number,balance):
        self.owner=owner
        self.account_number= account_number
        self.__balance=balance

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
        return f"you have withdrawn {amount}ETB"

    def deposit(self,amount):
        if amount<=0:
            return "please enter a postive number"
        self.__balance+=amount
        return f"you have deposited {amount}ETB"
    def statement(self):
        return f"Name:{self.owner}\naccount number:{self.account_number}\nbalance:{self.__balance}"



        
class SavingsAccount(Account):
    def __init__(self,owner,account_number,balance, rate,):
        super().__init__(owner,account_number,balance)
        self.rate=rate

    def add_interest(self):
       
       
        interest=self.balance * self.rate
        self.balance+=interest
        return f"Your interesr will be {interest}ETB"
    
   
    def statement(self):
        return f"Account type: Savings\n owner:{self.owner}\n account_number:{self.account_number}\nbalance:{self.balance}"
class CurrentAccount(Account):
    def __init__(self, owner, account_number, balance,overdraftLimit=1000):
        super().__init__(owner, account_number, balance)
        self.overdraftLimit=overdraftLimit

  
    def withdraw(self, amount):
        if amount <=0:
            return "please enter postive number"
        if amount>(self.balance + self.overdraftLimit):
            return "transaction rejected, make sure you have a sufficent balance and don't exceed the 1000ETB draft limit"
        self.balance-=amount
        return f"your request to withdraw{amount}ETB is successfull"

   
    def statement(self):
        return f"Account type: Current\n owner:{self.owner}\n account_number:{self.account_number}\n balance:{self.balance}ETB"   

        