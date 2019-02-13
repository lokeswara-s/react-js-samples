import {
    createStore,
    combineReducers
} from "redux";
import content from "./Reducers/ContentReducer";
import sample from "./Reducers/SampleReducer";


import user from './Reducers/UserReducer';

let rootRecucer = combineReducers({
    content, 
    sample,
    user
})


// store intial data
let intialState = {
    content: [],
    sample:[]
}

function configureStore(state = intialState){
    return createStore(rootRecucer, state);
}
export default configureStore;