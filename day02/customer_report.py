customers = [ 
("Almaz", 1500), ("Dawit", 700), ("Tigist", 200), 
("Hanna", 1200), ("Samuel", 450), 
]


def tier(balance):

    if balance >= 1000:
       
        return "Premium" 
    elif balance >= 500: 
        return "Standard"
        
    else:
        
        return "Basic"
       
premium=0
standard=0
basic=0
print("         Customer Report       ")
for name, balance in customers: 
    
    customer_tier=tier(balance)
    print(f"{name}: {tier(balance)} ({balance} ETB)")
    if customer_tier=="Basic":
        basic+=1
    elif customer_tier=="Standard":
        standard+=1
    elif customer_tier=="Premium":
        premium+=1

print(f"there are {premium} peole in premium tier")
print(f"there are {standard} peole in standard tier")
print(f"there are {basic} peole in basic tier")