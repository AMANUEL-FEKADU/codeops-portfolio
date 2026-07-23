def getOnlyEvens(arr):
    
    for i,v in enumerate(arr):
        if i%2==0 and v%2==0:
            print(v)

getOnlyEvens([1, 2, 3, 6, 4, 8])
getOnlyEvens([0, 1, 2, 3, 4])

# question 2

def reverseCompare(num):
   rv=int(str(num)[::-1])
   if rv<num:
       print("ok")
   else:
       print("Not ok")

reverseCompare(72)
reverseCompare(23)

# question 3
def returnFactorial(num):
    if num <=1:
        return 1

    return num * returnFactorial(num-1)

print(returnFactorial(5))
print(returnFactorial(6))
print(returnFactorial(0))

# question 4

def checkMeera(arr):
    if not arr:
        print("empty array")
    sqr=[i*2 for i in arr]
    for i in sqr:
        if i in arr:
            print("I am NOT a Meera array")
            return
    print("I am a Meera array")

checkMeera([10, 4, 0, 5])
checkMeera([7, 4, 9])
checkMeera([1, -6, 4, -3])    

# question 5

def isDual(arr):
   
    if len(arr) % 2 != 0:
        return 0

    for num in arr:
        if arr.count(num) != 2:
            return 0  
    return 1 

print(isDual([1,2,1,6,2]))

# question 6

def digitalclock(sec):
    hourfracton=sec/3600
    hour=int(hourfracton)
    decimalpart=hourfracton-hour

    minutefraction=decimalpart*60
    minute=int(minutefraction)
    decimalpart2=minutefraction-minute

    secondsfracton=decimalpart2*60
    seconds=int(secondsfracton)

    return f"{hour}:{minute}:{seconds}"

print(digitalclock(61201))