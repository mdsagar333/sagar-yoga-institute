import { useContext } from "react";
import { ContextAPI } from "../Context/AllContext";

const useAllContext = () => {
  return useContext(ContextAPI);
};

export default useAllContext;
