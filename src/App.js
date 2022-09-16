import {useState} from "react";

import {Users} from "./components";

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
