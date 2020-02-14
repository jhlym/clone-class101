import React from "react";
import storesContext from "../stores";

const useStores = () => React.useContext(storesContext);

export default useStores;
