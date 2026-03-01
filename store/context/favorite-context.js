import { createContext, useState } from "react";

export const FavoriteContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
});

export default function FavoriteContextProvider({children}){
    const [favoriteMealid,setFavoriteMealid]=useState([]);
    function addFavorite(id){
        setFavoriteMealid((current)=>[...current,id]);
    }

    function removeFavorite(id){
        setFavoriteMealid((current)=>current.filter((mealid)=>mealid!==id));
    }

    const value={
        ids:favoriteMealid,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
};