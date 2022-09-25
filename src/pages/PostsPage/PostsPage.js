import {Posts} from "../../components/Posts/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div style={{display:'flex'}}>
            <div>
                <Posts/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};
