import axios from "axios";

const API_KEY = 'BDN1EaDL5_WsIU924CCSH8uB7_Z4FU4ml8RpC87iHKg';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
    const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
    return data;
};