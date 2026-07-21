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


# 

# def linear(item,target):
#     for i,v in enumerate(item):
#         if v==target:
#             return f'{v} at index[{i}]'
        
#     return 'not here'
    
# li=[1,2,3,4,5,6,7,8,9,10,11,12,13]    
# print(linear(li,8))

def binary(item,target):
    low=0
    high=len(item)-1
    count=0
    while low<=high:
        
        mid=(low+high)//2

        if item[mid]==target:
            count+=1
            return f'{target} found in {count} iteration at index{mid}'
        
        elif target>item[mid]:
            low=mid+1
            count+=1
        elif target<item[mid]:
            high=mid-1
            count+=1

    return f'cant find it here'

li=[1,2,3,4,5,6,7,8,9,10,11,12,13]
print(binary(li,13))