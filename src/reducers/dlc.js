/*
    Documenting this so I remember it later.

    We are only storing the array of DLC results.
    There is nothing else we care about.

    The state will always be an array, not an object.
*/

const defaultState = [];
export default (state = defaultState, action) => {

    switch(action.type){
        case "SET_DLC":
            return action.dlc
        default:
            return state;
    }

};