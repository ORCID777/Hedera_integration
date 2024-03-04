import { createContext, useState } from "react";

const defaultValue = {
  accountId: "",
  setAccountId: (newValue) => {},
  isConnected: false,
  setIsConnected: (newValue) => {},
};

export const HashconnectContext = createContext(defaultValue);

export const HashconnectContextProvider = (props) => {
  const [accountId, setAccountId] = useState(defaultValue.accountId);
  const [isConnected, setIsConnected] = useState(defaultValue.isConnected);

  return (
    <HashconnectContext.Provider
      value={{
        accountId,
        setAccountId,
        isConnected,
        setIsConnected,
      }}
    >
      {props.children}
    </HashconnectContext.Provider>
  );
};
