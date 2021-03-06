import React, { createContext, useReducer } from "react";
import axios from "axios";
import NewsReducer from "./appReducer";

//inicializamos el estado
const initialState = {
  news: [],
};

//creamos el contexto
export const GlobalContext = createContext(initialState);

//creamos el Provider Component
export const GlobalProvider = ({ children }) => {
  //Inicializamos el reducer
  const [state, dispatch] = useReducer(NewsReducer, initialState);

  //Función que nos traé los personajes de ricky morty
  const getNews = async () => {
    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=0WpPTShc3tqz70ezkcATWr7zA0pyVNIC"
      );
      dispatch({
        type: "GET_NEWS",
        payload: res.data.results,
      });
    } catch (error) {
      console.error(error);
    }

    //dispachamos la acción que hará que cambie el estado de los personajes
  };

  return (
    <GlobalContext.Provider
      //pasamos los valores del provider
      value={{
        news: state.news,
        getNews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
