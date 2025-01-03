import axios from "axios";
import { Image } from "../types";

const API_KEY = 'BDN1EaDL5_WsIU924CCSH8uB7_Z4FU4ml8RpC87iHKg';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

interface GetPhotosResponse {
  total_pages: number;
  results: Image[];
}

export const getPhotos = async (query:string, page: number = 1): Promise<GetPhotosResponse> => {
    const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
    return data;
};