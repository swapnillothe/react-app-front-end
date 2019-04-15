import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { a: 1 };
    }

    componentWillMount() {
        fetch('/getNumber')
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((number) => {
                this.setState(number);
                return;
            });
    }

    render() {
        return <div>hello{this.state.a}</div>;
    }
}

export default App;
