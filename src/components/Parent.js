import React, { Component } from 'react';

// Child Component 1
class Child1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('Child1 componentDidMount');
        this.interval = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Child1 componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Child1 componentWillUnmount');
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Child1 - Count: {this.state.count}
            </div>
        );
    }
}

// Child Component 2
class Child2 extends Component {
    componentDidMount() {
        console.log('Child2 componentDidMount');
    }

    componentDidUpdate() {
        console.log('Child2 componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Child2 componentWillUnmount');
    }

    render() {
        return (
            <div>
                Child2
            </div>
        );
    }
}

// Parent Component
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello from Parent!',
        };
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
    }

    componentDidUpdate() {
        console.log('Parent componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Parent componentWillUnmount');
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Child1 />
                <Child2 />
            </div>
        );
    }
}

export default Parent;
