import { IBeer } from "../models/IBeer";
export const ROOT = "https://api.punkapi.com/v2/";

export const getAllBeers = async (page?: number): Promise<Array<IBeer>> => {
    const response = await fetch(`${ROOT}beers?page=${page}`);
    if (!response.ok)
        throw new Error((await response.json()).message);
    return await response.json();
}

export const getBeerById = async (id: number): Promise<IBeer> => {

    const response = await fetch(`${ROOT}beers/${id}`).catch(err => { throw new Error(err); });
    if (!response.ok)
        throw new Error((await response.json()).message);
    const data = await response.json();
    /**  
     * The API returns an array for this endpoint. To account for this we only return the first item 
     * and throw an error if its longer than 1
    */
    if (data.length !== 1) {
        throw new Error('Invalid response')
    }
    return data[0]
}