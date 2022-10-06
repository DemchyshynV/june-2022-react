import {Header, Posts, Users} from "./components";

const App = () => {
    return (
        <div>
            <Header/>
            <div>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
};

export {App};
