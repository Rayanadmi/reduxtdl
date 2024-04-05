import { GET_TACHE  , TOGGLE_TACHE_STATUS } from "../action/tache.action";

const initialState = {
  taches: [],

};

const tacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TACHE:
      return {
        ...state,
        taches: action.payload,
      };
    case TOGGLE_TACHE_STATUS:
      return {
        ...state,
        taches: state.taches.map(tache =>
          tache.id === action.payload.id ? { ...tache,
             completed: !tache.completed } 
             : 
            {tache }
        )
      };
    default:
      return state;
  }
};


export default tacheReducer;
