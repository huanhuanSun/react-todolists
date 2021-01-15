import {createStore} from 'redux'
let data=[
    {
        id:0,
        content:'lala',
        done:false
    },
    {
        id:1,
        content:'lulu',
        done:false
    }
]
function reducer (state=data,action){
    switch(action.type){
        case 'ADD':
            state.push({
                id:Date.now(),
                content:action.content,
                done:false
            })
            return [...state];
        case 'EDITDONE':
            state.filter(item=>{
                if (item.id === action.id) {
                    item.done = action.checked;
                }
                return item;
            })
            return [...state];
        case 'DELETE':
            return [...(state.filter(item=>item.id!=action.id))];
        case 'EDITEDATA':
            state.map((item)=>{
                if (item.id === action.id) {
                    item.content = action.content
                }
                return item
            })
            return [...state]
        case 'DELETEALL':
            return []
        default:
            return state

    }
}

const store = createStore(reducer);

export default store