import axios from 'axios';
import { IBeer } from "../models/IBeer";
import { IPageParams } from '../models/IPageParams';
export const ROOT = "https://api.punkapi.com/v2/";

const axiosInstance = axios.create({
    baseURL: ROOT,
    timeout: 2000,
    headers: { 'Accept': 'application/json' }
})
export const getAllBeers = async (params?: IPageParams): Promise<Array<IBeer>> => {
    const { data } = await axiosInstance.get<Array<IBeer>>("beers", { params: params })
        .catch(e => { throw new Error(e.message) });
    return data;
}

export const getBeerById = async (id: number): Promise<IBeer> => {
    const { data } = await axiosInstance.get<Array<IBeer>>(`beers/${id}`)
        .catch(e => { throw new Error(e.message) });
    /**  
     * The API returns an array for this endpoint. To account for this we only return the first item 
     * and throw an error if its longer than 1
    */
    if (data.length !== 1) {
        throw new Error('Invalid response')
    }
    return data[0]
}