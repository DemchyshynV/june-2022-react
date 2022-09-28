import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";
import {useRef} from "react";

const Login = () => {
    const {logIn} = useAuth();
    const {state} = useLocation();
    const name = useRef();
    const navigate = useNavigate();

    const login = () => {
        const userName = name.current.value;
        logIn(userName, () => navigate(state.pathname, {replace: true}))
    }

    return (
        <div>
            <input type="text" ref={name}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {Login};
