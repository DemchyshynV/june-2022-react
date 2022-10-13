import {useLocation} from 'react-router-dom';

// type useLocationType = ReturnType<typeof useLocation>
//
// interface IState<T> extends useLocationType {
//     state: T
// }

interface IState<T> {
    state: T
}

type LocationType<S> = ReturnType<typeof useLocation> & IState<S>

const useAppLocations = <State>():LocationType<State> => useLocation() as LocationType<State>;

export {
    useAppLocations
}
