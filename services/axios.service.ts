import axios, {AxiosResponse} from 'axios';
import {IUser} from '../interfaces';

const axiosService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});
type AxiosRes<T> = Promise<AxiosResponse<T>>

export {
    axiosService,
    AxiosRes
}


