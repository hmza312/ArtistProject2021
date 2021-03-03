import axios from 'axios';

export const USER_API_BASE_URL = 'https://rest.bandsintown.com/';

class AxiosInstance {
    getArtistevents(artist_name){
        return axios.get(USER_API_BASE_URL +`artists/${artist_name}/events?app_id=123&date=upcoming`);
    }
}

export default new AxiosInstance();