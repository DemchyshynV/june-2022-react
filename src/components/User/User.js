const User = ({user, getUser, addUser}) => {
    const {id, name, email} = user;
    const newUser = {id: 45, name: 'Max', email: 'max@gmail.com'}

    return (

        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={() => getUser(user)}>getUser</button>
            <button onClick={() => addUser(newUser)}>NewUser</button>
        </div>
    );
};

export {User};
