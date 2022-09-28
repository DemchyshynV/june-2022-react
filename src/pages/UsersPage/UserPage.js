import {Button} from "../../components/Button/Button";
import {useContext} from "react";
import {MyContext} from "../../index";

const UserPage = () => {
const context = useContext(MyContext);
    const show = () => {
        console.log('show');
    }
    return (
        <div>
            {JSON.stringify(context)}
            <Button onClick={() => show()} style={{display: 'flex'}}>my text</Button>
        </div>
    );
};

export {UserPage};
