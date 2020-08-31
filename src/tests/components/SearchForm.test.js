// react-test-renderer
import React from 'react'
import {shallow} from 'enzyme'
import {SearchForm} from '../../components/SearchForm';

test('Search Form Rendering Test', ()=>{
    const wrapper = shallow(<SearchForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('Input - Artist change', ()=>{
    const wrapper = shallow(<SearchForm/>);
    const testElem = wrapper.find('input')
    expect(testElem.length).toBe(5);
    
    //Testing Hours
    const artistElem = testElem.at(0);
    var artist = 'Rise Against';
    artistElem.simulate('change', {
        target: {value: artist}
    })
    expect(wrapper.state('artistNames')).toBe('Rise Against');
})

test('Input - Song change', ()=>{
    const wrapper = shallow(<SearchForm/>);
    const testElem = wrapper.find('input')
    expect(testElem.length).toBe(5);
    
    //Testing Hours
    const songElem = testElem.at(1);
    var songTest = 'Savior';
    songElem.simulate('change', {
        target: {value: songTest}
    })
    expect(wrapper.state('songNames')).toBe('Savior');
})

test('Input - Lead Tuning change', ()=>{
    const wrapper = shallow(<SearchForm/>);
    const testElem = wrapper.find('input')
    expect(testElem.length).toBe(5);
    
    //Testing Hours
    const lTuningElem = testElem.at(2);
    var lTuning = 'Eb Standard';
    lTuningElem.simulate('change', {
        target: {value: lTuning}
    })
    expect(wrapper.state('leadTunings')).toBe('Eb Standard');
})

test('Input - Rhythm Tuning change', ()=>{
    const wrapper = shallow(<SearchForm/>);
    const testElem = wrapper.find('input')
    expect(testElem.length).toBe(5);
    
    //Testing Hours
    const rTuningElem = testElem.at(3);
    var rTuning = 'Eb Standard';
    rTuningElem.simulate('change', {
        target: {value: rTuning}
    })
    expect(wrapper.state('rhythmTunings')).toBe('Eb Standard');
})

test('Input - Bass Tuning change', ()=>{
    const wrapper = shallow(<SearchForm/>);
    const testElem = wrapper.find('input')
    expect(testElem.length).toBe(5);
    
    //Testing Hours
    const bassElem = testElem.at(4);
    var bassTuning = 'D Standard';
    bassElem.simulate('change', {
        target: {value: bassTuning}
    })
    expect(wrapper.state('bassTunings')).toBe('D Standard');
})


test('Testing onSubmit for a valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<SearchForm onSubmit={onSubmitSpy}/>);
    const testElem = wrapper.find('input')
    expect(testElem.length).toBe(5);
    
    var testData = {
        artist: 'Rise Against',
        song: 'Approaching Curve',
        leadTuning: 'Lead',
        rhythmTuning: 'Rhythm',
        bassTuning: 'Bass'
    }

    // Fill out the forms.
    testElem.at(0).simulate('change', {         // Artist
        target: {value: testData.artist}
    })
    testElem.at(1).simulate('change', {         // Song
        target: {value: testData.song}
    })
    testElem.at(2).simulate('change', {         // Lead Tuning
        target: {value: testData.leadTuning}
    })
    testElem.at(3).simulate('change', {         // Rhythm Tuning
        target: {value: testData.rhythmTuning}
    })
    testElem.at(4).simulate('change', {         // Bass tuning
        target: {value: testData.bassTuning}
    })

    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        artistNames: testData.artist,
        songNames: testData.song,
        leadTunings: testData.leadTuning,
        rhythmTunings: testData.rhythmTuning,
        bassTunings: testData.bassTuning
    });
})