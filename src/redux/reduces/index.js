const initialState = {
    favorites: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_FAVORITES": {
        return {
          ...state,
          favorites: [...state.favorites, action.payload], 
        };
      }
      case "REMOVE_FAVORITES": {
        const newFavorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        );
        return {
          ...state,
          favorites: newFavorites,
        };
      }
      default: {
        return state;
      }
    }
  }
  
  export default reducer;