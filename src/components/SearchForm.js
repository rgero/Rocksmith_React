import React from 'react';

export class SearchForm extends React.Component {

    constructor(props){
        super(props);

        //Functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.resetState = this.resetState.bind(this);

        this.state = {
            artistNames: [],
            songNames: [],
            leadTunings: [],
            rhythmTunings: [],
            bassTunings: [],
        };
    };
    
    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit({
            artistNames: this.state.artistNames,
            songNames: this.state.songNames,
            leadTunings: this.state.leadTunings,
            rhythmTunings: this.state.rhythmTunings,
            bassTunings: this.state.bassTunings
        })
    }

    resetState(){
        this.setState({
            artistNames: [],
            songNames: [],
            leadTunings: [],
            rhythmTunings: [],
            bassTunings: [],
        })
    }

    onTextChange = (key) => (e) => {
        var newValue = e.target.value;
        switch(key){
            case "artistNames":
                this.setState({
                    artistNames: newValue
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form__input">
                        <label>Artist Names</label>
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Names"
                            autoFocus
                            value={this.state.artistNames}
                            onChange={this.onTextChange("artistNames")}
                        />
                    </div>
                    <div className="buttons">
                        <button className="button" onClick={this.resetState}>Reset</button>
                        <button className="button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default SearchForm;