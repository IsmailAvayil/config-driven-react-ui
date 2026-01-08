import { createContext, useContext } from "react";
import { appConfig } from "../config/appConfig";

const ConfigContext = createContext(appConfig);

export const ConfigProvider = ({ children }: { children: any }) => {
  return (
    <ConfigContext.Provider value={appConfig}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
