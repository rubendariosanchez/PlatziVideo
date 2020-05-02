const reducer = (state, action, compose) => {
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

        case 'LOGIN_REQUEST': 
        
        return {
            ...state,
            user: action.payload
        };

        case 'LOGOUT_REQUEST': 
        
        return {
            ...state,
            user: action.payload
        };

        case 'REGISTER_REQUEST': 
        
        return {
            ...state,
            user: action.payload
        };

        case 'GET_VIDEO_SOURCE': 
        
        return {
            ...state,
            playing: state.trends.find((item) => item.id === Number(action.payload)) ||
            state.originals.find((item) => item.id === Number(action.payload)) ||
            state.myList.find((item) => item.id === Number(action.payload)) || []
        };

        case 'SEARCH_VIDEOS': 
       
        return {
            ...state,
            trends: state.trends.filter(item => item.title.indexOf(action.payload) != -1),
            originals: state.originals.filter(item => item.title.indexOf(action.payload) != -1),
            myList: state.myList.filter(item => item.title.indexOf(action.payload) != -1)
        };

        case "IS_SEARCHING":
        return {
            ...state,
            //isSearching: action.payload,
        };

        break;

        case "GET_VIDEOS":
        return {
            ...state,
            /*searching: state.trends
            .concat(state.originals)
            .filter(item =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            ),*/
        };
        break;
        
        default:
            return state;
    }
}

export default reducer;