import {generateURL} from '../helpers/QueryParser';

export const setDLC = (dlc) => ({
    type: "SET_DLC",
    dlc
})

export const executeQuery = (query) => {
    var url = generateURL(query);
    return (dispatch, getState) => {
        fetch(url)
            .then(response => response.json())
            .then( (data) => {
                // Convert the collection of objects into an Array
                var dlc = Object.values(data);
                console.log(dlc.length);
                dispatch(setDLC(dlc)) } )
    }
}