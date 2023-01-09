import flats from "../data/flats";

export const SET_FLATS = "SET_FLATS";
export const SELECT_FLAT = "SELECT_FLAT";

export const setFlats = () => {
  return {
    type: SET_FLATS,
    payload: flats
  }
}

export const selectFlat = (flat) => {
  return {
    type: "SELECT_FLAT",
    payload: flat
  }
}
