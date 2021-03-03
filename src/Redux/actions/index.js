
import * as types from '../actiontype/index'
import {USER_API_BASE_URL} from '../../Apis/Artistapi';



export const fetchArtistBegin = () => ({
    type: types.FETCH_ARTIST_BEGIN
});

export const receiveArtist = artist => ({
    type: types.RECEIVE_ARTIST,
    artist
})

export const getArtist = (artist_name) => dispatch => {
    dispatch(fetchArtistBegin());
    return fetch(USER_API_BASE_URL+`artists/${artist_name}?app_id=13722599`)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(artist => {
        dispatch(receiveArtist(artist))
        return artist
        
    })
    .catch(error => console.log(error.message));
    
}
