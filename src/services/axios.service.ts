import axios, {AxiosResponse} from 'axios';

import {baseURL} from '../configs';

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL});


export {
    axiosService
}
