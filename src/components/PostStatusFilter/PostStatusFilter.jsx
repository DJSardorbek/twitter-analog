import React, {Component} from 'react';

class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {name: 'all', label:'All'},
                {name: 'like', label: 'Liked'}
            ]
        }
    }
    render() {
        const buttons_group = () => (
            this.state.buttons.map(btn => {
                const active = this.props.filter === btn.name;
                return (
                    <button
                        key={btn.name}
                        className={active ? 'btn btn-info': 'btn btn-outline-secondary'}
                        onClick={() => this.props.onFilterSelect(btn.name)}>
                        {btn.label}
                    </button>
                    )
                }
            ))
        return (
            <div className='d-flex btn-groups'>
                {buttons_group()}
            </div>
        );
    }
}

export default PostStatusFilter;