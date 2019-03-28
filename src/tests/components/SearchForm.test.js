// react-test-renderer
import React from 'react'
import {shallow} from 'enzyme'
import {SearchForm} from '../../components/SearchForm';

test("Header Test", ()=>{
    const wrapper = shallow(<SearchForm/>);
    expect(wrapper).toMatchSnapshot();
})