import axios from 'axios';
import { HOTELS, HOTELS_LOADING } from './types';

export const listHotels = () => {
    return async(dispatch) => {
      dispatch({type: HOTELS_LOADING, state:true})    

      await axios.get('https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507').then(async function (response) {
        dispatch({type: HOTELS, hotels:response.data})  
        dispatch({type: HOTELS_LOADING, state:false})      
   
      }).catch(function (error) {
        dispatch({type: HOTELS, hotels:[]}) 
        dispatch({type: HOTELS_LOADING, state:false})         
    })    
  }
  }


  export const updateNumber = (number) => {
    return async(dispatch) => {
 
    dispatch({type: SET_NUMBER_OF_LETTERS, numberOfLetters:number})    
  }
  }
