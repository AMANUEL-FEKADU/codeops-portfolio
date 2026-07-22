
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
