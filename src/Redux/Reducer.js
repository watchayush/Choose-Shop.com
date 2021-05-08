export default function Reducer(state = { loggedIn_person: null,myCart:null }, action) {
    switch (action.type) {
      case "USER_LOGGEDIN":
        console.log("inside reducer");
  
        return { loggedIn_person: action.loggedIn_person };
      
      case "UPDATE_CART":
        console.log("inside cart");
        return {myCart:action.myCart};

      default:
        return state;
    }
  }
  