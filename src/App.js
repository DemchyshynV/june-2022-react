import {useForm} from "react-hook-form";
import axios from "axios";
import {useEffect, useState} from "react";

const App = () => {
    const {register, handleSubmit} = useForm({defaultValues:{id:1}});
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => setUsers(data))
    }, [])

    const submit = async ({id}) => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(data)
    };

    return (
        <div>
            <form onChange={handleSubmit(submit)}>
                <select {...register('id')}>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                {/*<button>getInfo</button>*/}
            </form>
            {user && <div>{JSON.stringify(user)}</div>}
        </div>
    );
};

export {App};
