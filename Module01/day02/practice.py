        #Tempraturer label
temp=int(input("Enter a temprature(°C): "))
if temp <15:
    print("cold")
elif temp>=15 and temp<=28:
    print("warm")
else:
    print("hot")
        # Receipt loop
for a in range(1,10):
    print(f"Receipt #{a}")

    # Even numbers
for i in range(1,20):
    if i %2==0:
        print("Even")
    else:
        print("odd")


        # Discount function
def apply_discount(price, percent=10):
    return price -(price*(percent/100))
print(apply_discount(20))
print(apply_discount(20,20))


    #       countdown
a=5
while(a>=1):
    print(a)
    a-=1
print("Liftoff!")
