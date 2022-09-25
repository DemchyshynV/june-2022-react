import {useRef} from "react";

const App = () => {
    const name = useRef();
    const age = useRef();

    const submit = (e) => {
        e.preventDefault()
        const data = {name: name.current.value, age: age.current.value}
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder={'name'} ref={name}/>
                <input type="text" placeholder={'age'} ref={age}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {App};
