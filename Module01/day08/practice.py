# quesition 1
# def total(nums):
#     if not nums:
#         return 0
#     return nums[0] + total(nums[1:])
# nums=[4,2,3]
# print(total(nums))

# def  count_down(n) :
#     if n==1:
#         return 1

#     return f'{n}\n{count_down(n-1)}'

# print(count_down(4))

#-----------------------------------------------------------
# question 2

# def binary_search(items, target):
#     low=0
#     high=len(items)-1

#     while low <= high:
#         mid= (low + high)//2

#         if items[mid]==target:
#             return f'found {target} at inde {items.index(target)}'
#         elif items[mid]> target:
#             high=mid-1
#         elif items[mid]<target:
#             low=mid+1

#     return -1
# balances=[1024,1018,4712,6013,2214,8915]
# print(binary_search( balances,1024))

#----------------------------------------------------
# question 3

# def merge(left,right):
#     result=[]
#     i=0
#     j=0

#     while i<len(left) and j< len(right):
#         if left[i]<=right[j]:
#             result.append(left[i])
#             i+=1

#         else:
#             result.append(right[j])
#             j+=1

#     result.extend(left[i:])
#     result.extend(right[j:])
#     return result

# def merge_sort(items):
#     if len(items)<=1:
#         return items

#     mid=len(items)//2

#     left=merge_sort(items[:mid])
#     right=merge_sort(items[mid:])

#     return merge(left,right)

# nums=[4,28,63,7,2]
# print(merge_sort(nums))
# print(sorted(nums))

#--------------------------------------------------

# question 4
# def sort_by_balance(item):
#     return sorted(item,key=lambda a:a[1],reverse=True)

# rec=[('abebe',100),('kebede',1200),('sisay',3000),('aster',1400),('dawit',6400)]

# print(sort_by_balance(rec))

#--------------------------------------------------------------------

# question 5

def has_pair(items,target):
    low=0
    high=len(items)-1

    while low < high:
        sum=items[low]+items[high]
        if sum== target:
            return f'{items[low]} + {items[high]}={target}'

        elif sum<target:
            low+=1
        else:
            high-=1

    return f'no combination to match {target}'

nums=[1,3,4,5,6,7,8]
print(has_pair(nums,7))
