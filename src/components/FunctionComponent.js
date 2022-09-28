import {useEffect, useState} from "react";

const FunctionComponent = ({name}) => {
    console.log('constructor');
    const [state, setState] = useState({a: 0, b: 25});

    useEffect(() => {
        console.log('componentDidMount');
        return ()=>{
            console.log('componentWillUnmount');
        }
    }, [])

    useEffect(() => {
        console.log('componentDidUpdate');
    }, [state])
    const inc = () => {
        setState({...state, a: state.a + 1})
    }
    return (
        <div>
            {console.log('render')}
            FunctionComponent
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <div>Props: {name}</div>
            <button onClick={() => inc()}>Inc</button>
        </div>
    );
};

export {FunctionComponent};
