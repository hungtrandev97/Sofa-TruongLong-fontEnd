export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const MORE_QUATITY_CARY = "MORE_QUATITY_CARY";

export const addCart = (data) => ({
  type: ADD_CART,
  payload: { data },
});

export const removeCart = (data) => ({
  type: REMOVE_CART,
  payload: { data },
});

export const moreQuatitys = (data) => ({
  type: MORE_QUATITY_CARY,
  payload: { data },
});
