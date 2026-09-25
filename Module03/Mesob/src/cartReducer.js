export function cartReducer(state,action){
    switch (action.type){
        case 'add':
            return {...state,items:[...state.items,action.dish]}

        case 'remove':
            return {...state,
                items:state.items.filter(d=>d.id!==action.id)
            }

        case 'clear':
            return{items:[]}

        default:
            throw new Error("Unkown action: "+action.type)
    }
}

// testing
// const initialState = { items: [] }
// console.log('0. Initial State:', initialState)

// const dish1 = { id: 101, name: 'Doro Wat', price: 350 }
// const stateAfterAdd1 = cartReducer(initialState, { type: 'add', dish: dish1 })
// console.log('1. After ADD Doro Wat:', stateAfterAdd1)

// const dish2={id:102,name:'pasta',price:400}
// const stateA2=cartReducer(stateAfterAdd1,{type:'add',dish:dish2})
// console.log('3.After d2: ',stateA2)

// const stateA3=cartReducer(stateA2,{type:'remove',id:101})
// console.log('4. After state remove 1 : ',stateA3)