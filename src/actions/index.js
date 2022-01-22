import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchGifs = (category) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${category}`
      )
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchTrendingGifs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`
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
export const fetchFail = (error) => ({ type: FETCH_FAIL, payload: error });
export const fetchSuccess = (gifs) => ({
  type: FETCH_SUCCESS,
  payload: gifs,
});
