export function reducer(state, {type, payload}) {
  switch(type) {
    case "ADD_TO_CART": {
      const skinIndex = state.orderSkin.findIndex(fortItem => fortItem.id === payload.id);
      let newOrder = null;
      if(skinIndex < 0) {
        const newSkins = {
          ...payload,
          total: 1,
        }
        newOrder = [...state.orderSkin, newSkins];
      } else {
        newOrder = state.orderSkin.map((fortItem, i) => {
          if(i === skinIndex) {
            return {
              ...fortItem,
              total: fortItem.total + 1
            }
          } else {
            return fortItem
          }
        });
      }
      return {
        ...state,
        orderSkin: newOrder
      }
    }

    case "OPEN_BASKET":
      return {
        ...state,
        showBasket: !state.showBasket
      }

    case "INCREMENT_TOTAL":
      return {
        ...state,
        orderSkin: state.orderSkin.map(element => {
          if(element.id === payload.id) {
            const addSkin = element.total + 1
            return{
              ...element,
              total: addSkin,
            }
            } else {
                return element
            }
          })
      }

    case "DECREMENT_TOTAL":
      return {
        ...state,
        orderSkin: state.orderSkin.map(element => {
          if(element.id === payload.id) {
            const newTotal = element.total - 1
            return{
              ...element,
              total: newTotal >= 0 ? newTotal : 0,
            }
            } else {
              return element
            }
        })
      }

    case "REMOVE_ORDER_FROM_BASKET":
      return {
        ...state,
        orderSkin: state.orderSkin.filter(item => item.id !== payload.id)
      }
    
    case "SET_FEATURES":
      return {
        ...state,
        fortnite: payload || [],
        loading: false
      }
      
    default:
      return state
  }
}











