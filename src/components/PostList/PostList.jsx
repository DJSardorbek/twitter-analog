import React, {Component} from 'react';
import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

class PostList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {posts} = this.props;
        return (
            <ul className='app-list list-group'>
                {posts.map(post => (
                    <PostListItem
                        key={post.id}
                        {...post}
                        onDelete={() => this.props.onDelete(post.id)}
                        onToggleLiked={() => this.props.onToggleLiked(post.id)}
                        onToggleImportant={() => this.props.onToggleImportant(post.id)}
                    />
                ))}
            </ul>
        );
    }
}

export default PostList;