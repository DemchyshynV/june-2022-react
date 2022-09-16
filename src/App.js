import {Users} from "./components";
import {useState} from "react";

const App = () => {
    const [user, setUser] = useState(null);
    const getUser = (u) => {
        if (u === user) {
            setUser(null)
        } else {
            setUser(u)
        }
    }
    return (
        <div>
            {user && <div>{JSON.stringify(user)}</div>}
            <Users getUser={getUser}/>
        </div>
    );
};

export {App};
