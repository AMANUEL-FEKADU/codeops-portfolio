// let name='Abebe'
// console.log(`Hello ${name}`)
// console.log('Name:'+name)
// console.log('Name type:',typeof(name))


// // typecoearsion 
// //  -- Number() - if you insert a value that cant be converted 
// //  to number you will get nana
//     // -- String()
//     // -- Boolean()
 
// let num= '12'
// let x=Number(num)
// console.log('num type: ', typeof(x))

// // -- isNaN() - to check if it's num or not

// // var is hoisted but let and const are not
 

function recipt(bill,gues,method){
    let newbill=Number(bill)
    let tax=5
    if (newbill>300){
        tax=10
    }
    let revisedtax=bill*(tax/100)
    let totalBill=newbill+revisedtax

    
    
    let fee;
    switch(method){
        case 'TeleBirr':
            fee=15
        case 'CBE Birr':
            fee=20
    }
    
    let neweach=(totalBill+fee)/gues
    console.log(`each person would pay: ${neweach} $`)
    console.log(`${method} service fee: ${fee} $`)

}

recipt(300,5,'TeleBirr')