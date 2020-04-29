import themeReducer from './theme'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    dark: themeReducer,
})

export default rootReducer