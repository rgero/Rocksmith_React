// react-test-renderer
import React from 'react'
import {shallow} from 'enzyme'
import {SearchPage} from '../../components/SearchPage';

test('SearchPage Rendering Test', ()=>{
    const wrapper = shallow(<SearchPage/>);
    expect(wrapper).toMatchSnapshot();
})