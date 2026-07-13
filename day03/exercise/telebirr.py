people={}
try:
   
    with open('./day03/exercise/transaction.txt','r') as tb:
        for line in tb:
            cleaned = line.strip()
            data = cleaned.split(',')
            
            name = data[0]
            amount = float(data[1])

            if name in people:
                people[name] += amount
            else:
                people[name] = amount

    sorted_people=sorted(people.items(), key= lambda item:item[1], reverse=True)   
    sorted_dict=dict(sorted_people)   
    print(sorted_dict)
    for name,amount in sorted_dict.items():
        print(f'name:{name}  total:{amount}')

 

except FileNotFoundError:
    print('file doesn\'t exist')


try:
    with open('./day03/exercise/report.txt','w') as rep:
        rep.write('Customers                Total\n')
        for names,total in sorted_dict.items():
            space=15-len(names)
            pad=space*' '
            rep.write(f'{names}   {pad}   {total}\n')
except FileNotFoundError:
    print('filecant e found')
