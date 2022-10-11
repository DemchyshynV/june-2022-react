import {AxiosRes, axiosService} from './axios.service';
import {IUser} from '../interfaces';

const userService = {
    getAll:():AxiosRes<IUser[]> =>axiosService.get('/users'),
    getById:(id:number):AxiosRes<IUser> =>axiosService.get(`/users/${id}`)
}

export {
    userService
}
