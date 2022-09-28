import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 25}
        console.log('constructor');

    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return 5555
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    inc() {
        this.setState(prev => ({...prev, a: prev.a + 1}))
    }

    render() {
        console.log('render');
        return (
            <div>
                Hello from ClassComponent!!!!
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <div>Props: {this.props.name}</div>
                <button onClick={() => this.inc()}>Inc</button>
            </div>
        )
    }
}

export {ClassComponent}
