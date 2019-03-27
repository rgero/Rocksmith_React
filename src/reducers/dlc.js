const defaultState = [];
export default (state = defaultState, action) => {

    switch(action.type){
        case "SET_DLC":
            return action.dlc
        default:
            return state;
    }

};