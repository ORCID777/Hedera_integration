import { createContext, useState } from "react";

const defaultValue = {
  accountId: "",
  setAccountId: (newValue) => {},
  isConnected: false,
  setIsConnected: (newValue) => {},
};

export const BladeContext = createContext(defaultValue);

export const BladeContextProvider = (props) => {
  const [accountId, setAccountId] = useState(defaultValue.accountId);
  const [isConnected, setIsConnected] = useState(defaultValue.isConnected);
  return (
    <BladeContext.Provider
      value={{
        accountId,
        setAccountId,
        isConnected,
        setIsConnected,
      }}
    >
      {props.children}
    </BladeContext.Provider>
  );
};
