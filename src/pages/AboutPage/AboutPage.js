import {useAuth} from "../../hooks";

const AboutPage = () => {
    const {logOut} = useAuth();
    return (
        <div>
            <button onClick={()=>logOut(()=>console.log('Logout'))}>LogOut</button>
        </div>
    );
};

export {AboutPage};
