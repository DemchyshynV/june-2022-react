import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppLocations} from '../hooks';
import {ICar} from '../interfaces';
import {carService} from '../services';

const CarDetailsPage: FC = () => {
    const {id} = useParams<{ id: string }>();
    const {state} = useAppLocations<ICar>();
    const [car, setCar] = useState<ICar | null>(null);

    useEffect(() => {
        if (state){
            setCar(state)
        }else {
            carService.getById(+id!).then(({data})=>setCar(data))
        }
    }, [id, state])

    return (
        <div>
            {car&& (
                <div>
                    <div>id: {car.id}</div>
                    <div>model: {car.model}</div>
                    <div>price: {car.price}</div>
                    <div>year: {car.year}</div>
                </div>
            )}
        </div>
    );
};

export {CarDetailsPage};
