import {useEffect, useState} from "react";

import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};
