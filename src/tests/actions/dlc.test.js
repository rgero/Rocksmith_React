import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {setDLC} from '../../actions/dlc';
import DLC from '../fixtures/dlc'

const createMockStore = configureMockStore([thunk]);

test('Testing setDLC reducer', ()=> {
    let dlc = DLC[0];
    const store = createMockStore({});
    store.dispatch(setDLC(dlc));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'SET_DLC',
        dlc: dlc
    });
})