import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UserPage} from "./pages";
import {PostDetailPage} from "./pages/PostDetailPage/PostDetailPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
