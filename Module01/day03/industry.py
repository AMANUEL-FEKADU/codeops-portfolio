stock = {} 
try: 
    with open("./Module01/day03/stock.txt") as f: 
        for line in f: 
            item, qty = line.strip().split(",") 
            stock[item] = int(qty) 
except FileNotFoundError: 
    print("No stock file yet — starting empty") 


def adjust(item, amount): 
    stock[item] = max(0, stock.get(item, 0) + amount)


adjust("Amoxicillin", 5)   
adjust("Paracetamol", -2)  


low = [item for item, qty in stock.items() if qty < 10] 
print("Low stock:", low)

with open("./Module01/day03/stock.txt", "w") as f:
    for item, qty in stock.items():
        f.write(f"{item},{qty}\n")