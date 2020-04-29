const themeReducer = (state = true, action) => {
    switch(action.type){
        case 'TOGGLE':
            return !state
        case 'LIGHTEN':
            return false
        case 'DARKEN':
            return true
        default:
            return state
    }
}

export default themeReducer