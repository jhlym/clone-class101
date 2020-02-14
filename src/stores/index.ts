import React from "react";
import CartStore from "./CartStore";

const storesContext = React.createContext({
  cartStore: new CartStore()
});

export default storesContext;
