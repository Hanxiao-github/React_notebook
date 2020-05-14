import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem() {
        let {comment, index, deleteComment} = this.props;
        if (window.confirm(`确定删除${comment.name}的评论吗?`)) {
            deleteComment(index);
        }
    }
    render() {
        let {comment} = this.props;
        return(
            <div>
                <li>
                    <button onClick={this.deleteItem}>删除</button>
                    <p className="user"><span>{comment.name}</span><span>说：</span></p>
                    <p className="text">{comment.content}</p>
                </li>
            </div>
        )
    }
}

export default Item;