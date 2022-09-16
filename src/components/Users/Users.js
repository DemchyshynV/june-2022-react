import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUser}) => {
    const [users, setUser] = useState([]);

    const addUser = (item) => {
        setUser([...users, item])
    }

    useEffect(() => {
        userService.getAll().then(({data}) => data.filter(user => user.id < 5)).then(users => setUser(users))
    }, [])

    return (
        <div>
            {
                users.length ? users.map(user => <User key={user.id} user={user} getUser={getUser}
                                                       addUser={addUser}/>) :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

export {Users};
