import { createStore } from "redux";

import Reducer from "./Reducer";

export default function configureStore() {
  const state = { loggedIn_person: null,myCart:null };
  const store = createStore(Reducer, state);
  return store;
}