import React from 'react';
import Item from '../Item/Item.js';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {comments} = this.props;
        return(
            <div id="list">
                <p>评论回复：</p>

                <ul>
                    {
                        comments.map((comment,index) => {
                            return <Item  key={index} comment={comment} deleteComment={this.props.deleteComment} index={index}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;