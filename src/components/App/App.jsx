import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";
import './App.css';
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React JS', important: false, like: false, id:'qw'},
                {label: 'That is so good', important: false, like: false, id:'qe'},
                {label: 'I need a break', important: false, like: false, id:'qr'},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
        this.addItem = (text) => {
            const newItem = {
                label: text,
                important: false,
                like: false,
                id: this.maxId++
            };
            this.setState({data: [...this.state.data, newItem]});
        }
        this.onDelete = (id) => {
            const index = this.state.data.findIndex(item => item.id === id);
            this.setState(({data}) => {
                const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            })
        }
        this.onToggleLiked = (id) => {
            const index = this.state.data.findIndex(item => item.id === id);
            this.setState(({data}) => {
                const oldItem = data[index];
                const newItem = {...oldItem, like: !oldItem.like};
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            })
        };
        this.onToggleImportant = (id) => {
            const index = this.state.data.findIndex(item => item.id === id);
            this.setState(({data}) => {
                const oldItem = data[index];
                const newItem = {...oldItem, important: !oldItem.important};
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            })
        }
        this.onSearchPanelChanged = (term) => {
            this.setState({term});
        }
        this.searchPost = (posts, term) => {
            if(term.length === 0) {
                return posts;
            } else {
                return posts.filter(post => post.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
            }
        }
        this.onFilterSelect = (filter) => {
            this.setState({filter});
        }
        this.onFilterPosts = (posts, filter) => {
            if(filter === 'all') {
                return posts
            } else {
                return posts.filter(post => post.like);
            }
        }
    }
    render() {
        const likedPosts = this.state.data.filter(item => item.like).length;
        const allPosts = this.state.data.length;
        const visiblePosts = this.onFilterPosts(this.searchPost(this.state.data, this.state.term), this.state.filter);
        return (
            <div className='app'>
                <AppHeader likedPosts={likedPosts} allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel onSearchPanelChanged={this.onSearchPanelChanged}/>
                    <PostStatusFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.onDelete}
                    onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleImportant}
                />
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}