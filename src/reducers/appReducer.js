import { HOTELS, HOTELS_LOADING } from '../actions/types';


const initialState = {
    hotels:[],
    loading:false,
  }
  
  export default (state = initialState , action) => {
    switch(action.type){
      case HOTELS :  return {...state,hotels:action.hotels};
      case HOTELS_LOADING :  return {...state,loading:action.state};
    
      default: return state;
    }
  }