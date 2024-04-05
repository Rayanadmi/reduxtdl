import axios from "axios"

export const GET_TACHE = 'getTache'
export const TOGGLE_TACHE_STATUS = 'toggleTacheStatus';


export const getTache = () =>{
    return async (dispatch) => {
        axios.get('http://localhost:3333/tasks')

        try {
          const res = await axios.get('http://localhost:3333/tasks');
          dispatch({ type: GET_TACHE, payload: res.data });
          console.log(res.data);
      } catch (error) {
          console.error("Error fetching tasks:", error);
      }
    
}}
export const toggleTacheStatus = (tache) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:3333/tasks/${tache.id}`);
      // Mettre à jour le statut de la tâche
      const updatedTache = { ...tache, title: tache.title, completed: !tache.completed };
      console.log(updatedTache);
      dispatch({ type: TOGGLE_TACHE_STATUS, payload: updatedTache });
    } catch (error) {
      console.error("Error toggling task status:", error);
    }
  }

}

    
