import React, {Component} from 'react';
import ReactDom from 'react-dom';

import JSON from './db.json'

//COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {

    state = {
        news:JSON
    }

    render() {
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
    
}

ReactDom.render(<App/>, document.querySelector("#root"))