import React from 'react';
import {Link} from 'react-router';


class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                App组件
                <ul>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/repos'>repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }

}

export default App;