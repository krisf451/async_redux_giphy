import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

//create a thunk action object

export const fetchGifs = (category) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=TQlqlVf81B3ycWrBQppshWRfZrg8QYGG&q=${category}`
      )
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (gifs) => ({
  type: FETCH_SUCCESS,
  payload: gifs,
});

export const fetchFail = (error) => ({ type: FETCH_FAIL, payload: error });
