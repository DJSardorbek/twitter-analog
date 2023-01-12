import React, {Component} from 'react';
import "./SearchPanel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onSearchPanelChanged = (e) => {
            this.setState({term: e.target.value}, () => {
                this.props.onSearchPanelChanged(this.state.term);
            });

        }
    }
    render() {
        return (
            <input
                className='form-control search-input'
                type="text"
                placeholder='Search by posts'
                value={this.state.term}
                onChange={(e) => this.onSearchPanelChanged(e)}
            />
        );
    }
}

export default SearchPanel;