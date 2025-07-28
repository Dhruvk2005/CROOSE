'use client'
import { createContext, useContext, useState } from "react";

const IqContext = createContext<any>(null);

export const IqProvider = ({ children }:any) => {
  const [iqIncreased, setIqIncreased] = useState(0);
  return (
    <IqContext.Provider value={{ iqIncreased, setIqIncreased }}>
      {children}
    </IqContext.Provider>
  );
};

export const useIq = () => useContext(IqContext);
