import React from 'react';
import './App.css';
import Add from '../Add/Add.js';
import List from '../List/List.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.state = {
      comments: [
        {
          name:'Bob',
          content:'React大法好'
        },
        {
          name:'Kat',
          content:'React还不错'
        },
        {
          name:'Jack',
          content:'React so eazy'
        }
      ]
    }
  }
  //添加评论
  addComment(comment) {
    let {comments} = this.state;
    comments.unshift(comment);
    this.setState({
      comments
    })
  }
  //删除指定评论
  deleteComment(index) {
    let {comments} = this.state;
    comments.splice(index,1);
    this.setState({
      comments
    })
  }
  render() {
    let {comments} = this.state;
    return (
        <div>
          <div id="title">
            请发表对React的评论
          </div>
          <div>
            <Add addComment={this.addComment}/>
            <List comments={comments} deleteComment={this.deleteComment}/>
          </div>
        </div>
    );
  }

}

export default App;
