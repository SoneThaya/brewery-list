import axios from 'axios';

export const FETCH_BREWERY_START = "FETCH_BREWERY_START"
export const FETCH_BREWERY_SUCCESS = "FETCH_BREWERY_SUCCESS"
export const FETCH_BREWERY_FAILURE = "FETCH_BREWERY_FAILURE"

export const fetchBrewery = () => {
  return dispatch => {
    dispatch({ type: FETCH_BREWERY_START });

    axios
      .get("https://api.openbrewerydb.org/breweries")
      .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_BREWERY_SUCCESS, payload: res.data})
      })
      .catch(err => console.log(err))
  }
  
}