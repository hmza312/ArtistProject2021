import {
  
    RECEIVE_ARTIST,
  
  } from "../actiontype/index";

    
const initialState = {
    artist: null,
 
};

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ARTIST:
            return { ...state,
                artist: action.artist };
         
         
        default:
            return state;
    }
};
export default artistReducer;
