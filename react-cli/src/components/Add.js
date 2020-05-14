import React from 'react';
import './Add.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }
    add() {
        //1.检查合法性
        const name = this.refs.name.value.trim();
        const content = this.refs.content.value.trim();
        if(!name){
            alert('用户名不能为空');
            return
        }
        if(!content){
            alert('内容不能为空');
            return
        }
        //2.产生一个comment对象
        const comment = {
            name,
            content
        };
        //3.添加到comments中
        this.props.addComment(comment);
        //4.清除输入
        this.refs.name.value = '';
        this.refs.content.value = '';
    }
    render() {
        return(
            <div id="add">
                <div id="name">
                    <p>用户名</p>
                    <input type="text" placeholder="用户名" ref="name"/>
                </div>
                <div id="comment">
                    <p>评论内容</p>
                    <textarea rows="10" placeholder="评论内容" ref="content"></textarea>
                </div>
                <button onClick={this.add}>提交</button>
             </div>
        )
    }
}

export default Add;