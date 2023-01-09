import flats from "../data/flats";

export const setFlats = () => {
  return {
    type: "SET_FLATS",
    payload: flats
  }
}

export const selectFlat = (flat) => {
  return {
    type: "SELECT_FLAT",
    payload: flat
  }
}
