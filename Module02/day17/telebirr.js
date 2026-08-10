const loyalityPoints=(earnrule=etb=>Math.floor(etb/10))=>{
    let points=0

    return{ 
        earn(etb){
            points+= earnrule(etb)
            return points
        },
        redeem(p){
            if (points<=0 || p> points){
                return 'error, poitns 0'
                
            }
            return points-=p
            return points
        },
        balance(){
            return points
        }
    };
}

const card=loyalityPoints()
card.earn(250)
console.log(card.balance())

const holiday=loyalityPoints(earnrule=etb=>Math.floor((etb/10)*2))
holiday.earn(250)
console.log(holiday.balance())
