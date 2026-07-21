
# a list index and a dict lookup is constant(O(1)) since the program can directly accecess the address using the index and the unique key repetively
# binary search is logarithmic (O(log n)) since it is a searching method that halves the problem each step
# a single loop is linear(O(n)). as the items to loop increase the time needed also increases.
# nested loop is quadratic since it have to pass atleast 5 different loop condtions for 1 operation

#------------------------------------------------------------
#question 2
# import random
# total=100000
# acc_set=set()

# while len(acc_set)<total:
#     acc_num=f"Acc-{random.randint(100000,999999)}"
#     acc_set.add(acc_num)

# acc_list=list(acc_set)


# accounts_dict = {
#     acc: {"status": "active", "balance": random.randint(100, 50000)} 
#     for acc in acc_list
# }


# print(acc_list[99999]) # 1.189 seconds

# print(accounts_dict[acc_list[99999]]) #0.785

# #--------------------------------------------
# # question 3
# from collections import deque
# class Stack:
#     def __init__(self):
#         self.box=deque()

#     def push(self,data):
#         self.box.append(data)
#         return
    
#     def pop(self):
#         if not self.box:
#             return f"empty Stack"
        
#         self.box.pop()
#         return f"{self.box[-1]} deleted from the stack"
    
#     def peek(self):
#         if not self.box:
#             return f"empty stack"
#         removed=self.pop()
#         return f"{removed} is at the top"
    
#     def reverse(self):
#         for ele in reversed(self.box):
#             print(ele)

# names=Stack()
# names.push("Abebe")
# names.push("Aster")
# names.push("Dawit") # should be top of the stack

# names.reverse()

# #-----------------------------------------------------------
# #question 4

# from collections import deque

# class Queue:
#     def __init__(self):
#         self.box=deque()

#     def enqueue(self,data):
#         self.box.append(data)
#         return

#     def serve(self):
#         if not self.box:
#             print("Queue is empty!")
#             return
        
#         served=self.box.popleft()
#         print(f"serving: {served}")

# cust=Queue()
# cust.enqueue("Abebe")
# cust.enqueue("Aster")
# cust.enqueue("Dawit")
# cust.enqueue("tewodros")
# cust.enqueue("belete")
# cust.serve()

# --------------------------------------
# question 5

class Node:
    def __init__(self,data):
        self.data=data
        self.next=None

class Linkedlist:
    def __init__(self):
        self.head=None
        
    def push_front(self,data):
        newNode=Node(data)

        newNode.next=self.head
        self.head=newNode

    def print_all(self):
        if not self.head:
            print("empty")
        
        current=self.head
        elements=[]
        while current:
            elements.append(str(current.data))
            current=current.next

        print("->".join(elements)+"->None")

ll=Linkedlist()

ll.push_front("Abeb")
ll.push_front("kebede")
ll.print_all()
 