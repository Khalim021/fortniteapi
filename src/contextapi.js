import { useReducer } from "react";
import { createContext } from "react";
import {reducer} from "./reducer";

export const FortniteContext = createContext();

const inintialState = {
  fortnite: [],
  loading: true,
  orderSkin: [],
  showBasket: false,
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, inintialState)

  value.addToCart = (fort) => {
    dispatch({type: "ADD_TO_CART", payload: fort})
  }

  value.handleBasketShow = () => {
    dispatch({type: "OPEN_BASKET"})
  }

  value.incrementTotal = (skinId) => {
    dispatch({type: "INCREMENT_TOTAL", payload: {id: skinId}})
  }

  value.decrementTotal = (skinId) => {
    dispatch({type: "DECREMENT_TOTAL", payload: {id: skinId}})
  }

  value.removeOrderFromBasket = (skin) => {
    dispatch({type: "REMOVE_ORDER_FROM_BASKET", payload: {id: skin}})
  }

  value.setFortnite = (data) => {
    dispatch({type: "SET_FEATURES", payload: data})
  }

  value.setSearch = (data) => {
    dispatch({type: "SET_SEARCH", payload: data})
  }

  return (
    <FortniteContext.Provider value={value}>
      {children}
    </FortniteContext.Provider>
  )
}














