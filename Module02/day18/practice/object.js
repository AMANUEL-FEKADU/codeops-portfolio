const Customer={
    name:"Amanuel Fekadu",
    city:"Addis Ababa",
    balance:241
}

for (const [key,value] of Object.entries(Customer)){
    console.log(`${key} : ${value}`)
}