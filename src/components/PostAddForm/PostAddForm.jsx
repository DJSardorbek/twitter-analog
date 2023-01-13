import React, {Component} from 'react';
import "./PostAddForm.css";

class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onAdd = (e) => {
            e.preventDefault();
            this.props.onAdd(this.state.text);
            this.setState({text:''});
        }
    }
    render() {
        return (
            <form
                className='bottom-panel d-flex justify-content-center'
                onSubmit={this.onAdd}
            >
                <input
                    type="text"
                    placeholder='What are you thinking about?'
                    className='form-control new-post-label'
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                <button
                    className='btn btn-outline-secondary btn-add'
                    type='submit'>
                    Add Post
                </button>
            </form>
        );
    }
}

export default PostAddForm;