const reducer = (state, action) => {
    switch(action.type){
        case 'SET_FAVORITE': 
        
        const index = state.myList.findIndex(items => items.id == action.payload.id);
        if(index == -1)
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        return state;
        case 'DELETE_FAVORITE': 
        
        return {
            ...state,
            myList: state.myList.filter(items => items.id !== action.payload)
        };

        default:
            return state;
    }
}

export default reducer;