import {useMemo, useState} from "react";

const summator = (n) => {
    console.log('start');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += n
    }
    console.log('finish');
    return sum
}

const UseMemo = () => {
    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    // const number = summator(n);
    const number = useMemo(()=>summator(n), [n])

    return (
        <div>
            <h1>sum: {number}</h1>
            <h1>count: {count}</h1>
            <button onClick={() => setN(prev => prev + 1)}>incN</button>
            <button onClick={() => setCount(prev => prev+1)}>incCount</button>
        </div>
    );
};

export {UseMemo};
