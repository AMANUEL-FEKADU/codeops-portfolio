# question 1

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):
    
    if root is None:
        return Node(value)

    
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)

    
    return root


def in_order(root):
   
    if root is None:
        return []

    
    return in_order(root.left) + [root.value] + in_order(root.right)
    


balances = [2100, 1200, 3500, 500, 1800, 2900]

root = None
for balance in balances:
    root = insert(root, balance)


sorted_balances = in_order(root)
print("sorted inOrder traversal:", sorted_balances)

#------------------------------------------------------------
#question 2

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):
    if root is None:
        return Node(value)
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)
    return root


def height(node):
   
    if node is None:
        return 0

    left_height = height(node.left)
    right_height = height(node.right)

    return 1 + max(left_height, right_height)


balances = [2100, 1200, 3500, 500, 1800, 2900]

root = None
for balance in balances:
    root = insert(root, balance)

print("tree height:", height(root))
#--------------------------------------------------------------
#question 3

from collections import deque

def dfs(graph, start, visited=None):
    
    if visited is None:
        visited = []

  
    visited.append(start)


    for neighbor in graph.get(start, []):
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

    return visited


def bfs(graph, start):
   
    visited = []
    queue = deque([start])

    while queue:
        curr = queue.popleft()
        if curr not in visited:
            visited.append(curr)
            for neighbor in graph.get(curr, []):
                if neighbor not in visited:
                    queue.append(neighbor)

    return visited

transfers = {
    1001: [1002, 1003],
    1002: [1004],
    1003: [],
    1004: [1001]  
}

dfs_order = dfs(transfers, 1001)
bfs_order = bfs(transfers, 1001)

print("dfSs order:", dfs_order)
print("bfs order:", bfs_order)

#--------------------------------------------------------------------

# question 4

import heapq


pq = []


heapq.heappush(pq, (3, "Run monthly database backup"))
heapq.heappush(pq, (1, "Fix critical login bug"))
heapq.heappush(pq, (5, "Update documentation"))
heapq.heappush(pq, (2, "Process pending bank transfers"))
heapq.heappush(pq, (4, "Send daily email summaries"))

print("Popping tasks by priority:")
print("-" * 35)


while pq:
    priority, task = heapq.heappop(pq)
    print(f"Priority {priority}: {task}")