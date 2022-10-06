import GlobalVarContext from "./GlobalVarContext";
import React, { useState } from "react";

const GlobalVarState = (props) => {
  const [time, setTime] = useState("");
  const fun = () => {};
  return (
    <GlobalVarContext.Provider
      value={{
        time,
        setTime,
        fun,
      }}
    >
      {props.children}
    </GlobalVarContext.Provider>
  );
};
export default GlobalVarState;
