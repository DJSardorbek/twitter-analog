import React from "react";
import "./AppHeader.css";
export default class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='app-header d-flex justify-content-between'>
                <h1>Sardorbek Sodiqjonov</h1>
                <h2>{this.props.allPosts} posts, like {this.props.likedPosts}</h2>
            </div>
        )
    }
}