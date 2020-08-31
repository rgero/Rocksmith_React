// react-test-renderer
import React from 'react'
import {shallow} from 'enzyme'
import {DLCList} from '../../components/DLCList';

import dlcData from '../fixtures/dlc';

test('DLCList Rendering Test - No Data Rendering', ()=>{
    const wrapper = shallow(<DLCList/>);
    expect(wrapper).toMatchSnapshot();
})

test('DLCList Rendering Test - Data Rendering', ()=>{
    const wrapper = shallow(<DLCList dlc={dlcData}/>);
    expect(wrapper).toMatchSnapshot();
})
