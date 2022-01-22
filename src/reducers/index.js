import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  gifs: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        gifs: [],
        loading: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        gifs: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        gifs: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
