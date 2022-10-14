import {memo} from "react";

const Todos = memo(({todos,addTodo}) => {
    console.log('Todos child loading');
    return (
        <div>
            {todos.map((todo, index)=><p key={index}>{todo}</p> )}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
})

export {Todos};
