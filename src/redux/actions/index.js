export function addFavorites(character) {
    return { type: "SET_FAVORITES", payload: character };
  }
  
  export function removeFavorites(character) {
    return { type: "REMOVE_FAVORITES", payload: character };
  }