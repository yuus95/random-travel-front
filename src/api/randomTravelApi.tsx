import { RandomTravelType } from "../types/RandomTravlelType";

const API_BASE_URL = 'http://localhost:8080/random-travel';

export const GetList = async ( token:string | null ,page: number, limit: number): Promise<RandomTravelType[]> => {

    try{
        let url = `${API_BASE_URL}?page=${page}&limit=${limit}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        const data = await response.json();
        return data.travels;
    } catch(error: any){
        throw Error(error);
    }
}

export const GetCount = async (token:string | null): Promise<number>  =>{
    try{
        let url = `${API_BASE_URL}/count`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        const data = await response.json();
        return data.count;
    } catch(error: any){
        throw Error(error);
    }
}