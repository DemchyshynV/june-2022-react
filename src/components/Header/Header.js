import css from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
            </div>
            <div>
                <button onClick={()=>navigate(-1)}>Prev</button>
                <button onClick={()=>navigate(1)}>Next</button>
            </div>
        </div>
    );
};

export {Header};
