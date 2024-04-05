import React, { useEffect } from "react";
//import { getTache } from "../action/tache.action";
import { useDispatch, useSelector } from "react-redux"; 
import { toggleTacheStatus } from "../action/tache.action";

const AfficherTache = () => {
    const dispatch = useDispatch(); // Utilisez useDispatch() pour obtenir la fonction de dispatch

    // Utilisez useSelector pour récupérer l'état taches du store Redux
    const taches = useSelector(state => state.taches);

    // useEffect(() => {
    //     // Dispatchez l'action getTache lorsque le composant est monté
    //     dispatch(getTache());
    // }, [dispatch]); // Ajoutez dispatch aux dépendances de useEffect
    const changementStatu = (tache) => {
            dispatch(toggleTacheStatus(tache));
    }
    return (
        <>
            {/* Utilisez taches, qui contient les données provenant du store Redux, pour afficher les tâches */}
            {taches.map(tache => (
                <div key={tache.id} className="taches">
                     {tache.title} 
                     <br />
                     {tache.completed ? 'Terminé' : 'En cours'}
                     <button onClick={
                        () => changementStatu(tache)
                     }>Changer le statu</button>
                     </div> 
                
            ))}
        </>
    )
}

export default AfficherTache;
