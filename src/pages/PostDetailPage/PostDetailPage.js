import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";

const PostDetailPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state){
            postService.getById(id).then(({data})=>setPost(data))
        }else {
            setPost(state)
        }
    }, [id, state])

    return (
        <div>
            {post && <div>{JSON.stringify(post)}</div>}
        </div>
    );
};

export {PostDetailPage};
