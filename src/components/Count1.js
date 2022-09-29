import {DEC, INC, RESET, SET, useCount1Reducer} from "../reducers";

const Count1 = () => {
    const [state, dispatch] = useCount1Reducer();
    return (
        <div>
            <h1>Count1: {state.count1}</h1>
            <button onClick={() => dispatch({type: INC})}>INC</button>
            <button onClick={() => dispatch({type: DEC})}>DEC</button>
            <button onClick={() => dispatch({type: RESET})}>RESET</button>
            <button onClick={() => dispatch({type: SET, payload:10})}>SET</button>
        </div>
    );
};

export {Count1};
