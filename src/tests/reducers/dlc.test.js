import dlcReducer from '../../reducers/dlc';
import DLC from '../fixtures/dlc';

test('Testing the DLC Reducer', ()=> {
    let dlc = DLC[0];
    let action = {
        type: 'SET_DLC',
        dlc
    }
    const state = dlcReducer([], action);
    expect(state).toBe(action.dlc);
})