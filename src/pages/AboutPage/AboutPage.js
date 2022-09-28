import {useContext, useEffect} from "react";
import {MyContext} from "../../index";
import {postService} from "../../services/post.service";

const AboutPage = () => {
    const context = useContext(MyContext);

    useEffect(() => {
        postService.getById(3).then(({data}) => Object.assign(context, data))
    }, [])
    return (
        <div>
            AboutPage
            {/*<h1>{JSON.stringify(context)}</h1>*/}
            {/*<h1>{context.name}</h1>*/}
            {/*<h1>{context.age}</h1>*/}
            {/*{context.post&&<p>{JSON.stringify(context.post)}</p>}*/}

        </div>
    );
};

export {AboutPage};
