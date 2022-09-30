import {Car} from "../Car/Car";

const Cars = ({cars, setCars}) => {
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};
