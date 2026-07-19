bill=7540
people=4
group=['john','peter','alice','kobe']

def split_bill(bill,people,tax_rate=0.10):
    total_bill=bill +(bill*tax_rate)
    each_person=total_bill/people
    return each_person
total=split_bill(bill,people)
print('___________Recipet_________')
for person in group:
    print(f"    {person}'s share is:{total}")
print('__________________________')