export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

// return
export const SearchSuccess = (value) => ({
  type: SEARCH_SUCCESS,
  payload: { value },
});
