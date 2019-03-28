// react-test-renderer
import React from 'react'
import {shallow} from 'enzyme'
import {ResultsPage} from '../../components/ResultsPage';

import dlcData from '../fixtures/dlc';

test("ResultsPage Rendering Test - No Data Rendering", ()=>{
    const wrapper = shallow(<ResultsPage/>);
    expect(wrapper).toMatchSnapshot();
})

test("ResultsPage Rendering Test - Data Rendering", ()=>{
    const wrapper = shallow(<ResultsPage dlc={dlcData}/>);
    expect(wrapper).toMatchSnapshot();
})

