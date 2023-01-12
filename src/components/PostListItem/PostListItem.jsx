import React, {Component} from 'react';
import "./PostListItem.css";

class PostListItem extends Component {
    render() {
        let classNames = 'list-group-item app-list-item d-flex justify-content-between align-items-center';
        if(this.props.important) {
            classNames += ' important'
        }
        if(this.props.like) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span className='app-list-item-label' onClick={this.props.onToggleLiked}>{this.props.label}</span>
                <div className='btn-groups d-flex justify-content-center'>
                    <button onClick={this.props.onToggleImportant} type='button' className='btn-star btn-sm'>
                        <i className='fa fa-star'></i>
                    </button>
                    <button onClick={this.props.onDelete} type='button' className='btn-trash btn-sm'>
                        <i className='fa fa-trash'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </li>
        );
    }
}

export default PostListItem;