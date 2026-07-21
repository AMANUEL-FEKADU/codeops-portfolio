# import pdb

# def div(a,b):
#     pdb.set_trace()
#     return a/b

# print(div(10,2))   


# Linked LIst
# class Node:
#     def __init__(self,data):
#         self.data=data
#         self.next=None

# class LinkedList:
#     def __init__(self):
#         self.head=None

#     def append(self,data):
#         newNode=Node(data)

#         if not self.head: # if the List is empty
#             self.head=newNode #this becomes the head
#             return

#         current = self.head
#         while current.next:
#             current=current.next

#         current.next=newNode

#     def display(self):
#         current=self.head
#         elements=[]
#         while current:
#             elements.append(str(current.data))
#             current=current.next

#         print("->".join(elements)+'->None')
#     def prepend(self,data):
#         newNode=Node(data)
#         newNode.next=self.head
#         self.head=newNode
    
#     def delete_by_value(self,target):
#         if not self.head:
#             return
        
#         if self.head.data==target:
#             self.head=self.head.next
#             return
        
#         current=self.head

#         while current.next:
#             if current.next.data==target:
#                 current.next=current.next.next
#                 return
            
#             current=current.next




# myl=LinkedList()
# myl.append("addis")
# myl.append('zeway')
# myl.append('gonder')
# myl.prepend("asayta")

# myl.display()

# myl.delete_by_value("asayta")
# myl.display()


# stack and queue

# from collections import deque

# class stack:
#     def __init__(self):
#         self.box=deque()

    

#     def push(self,data):
#         self.box.append(data)
#         return f"{data} added to the stack"

#     def pop(self):
#         if not self.box:
#             return "Empty Box"
#         self.box.pop()
#         return f'last item poped({self.box[-1]}) at index -1'

#     def peek(self):
#         if not self.box:
#             return "Empty Box"
        
#         return self.box[-1]
    
#     def display(self):
#         for item in reversed(self.box):
#             print(f'{item}')

# st=stack()
# st.push(1)
# st.push(2)
# st.display()
# print(st.peek())


from collections import deque

class queue:
    def __init__(self):
        self.box=deque()

    def enqueue(self,data):
        self.box.append(data)

    def dequeue(self):
        if not self.box:
            return "empty"
        
        self.box.popleft()

    def display(self):
        ele=[str(item) for item in self.box]
        print("front->".join(ele)+"->last")


d=queue()
d.enqueue(1)
d.enqueue(2)
d.enqueue(3)
d.display()





        


        