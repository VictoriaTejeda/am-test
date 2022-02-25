export function addFavorites(character) {
    return { type: "ADD_FAVORITES", payload: character };
  }
  
  export function removeFavorites(character) {
    return { type: "REMOVE_FAVORITES", payload: character };
  }