'use client';

import React, { createContext, useState } from 'react';

interface SettingContextProps {
  openSetting1: boolean;
  setOpenSetting1: React.Dispatch<React.SetStateAction<boolean>>;
  openSetting2: boolean;
  setOpenSetting2: React.Dispatch<React.SetStateAction<boolean>>;
  openSettingDelete: boolean;
  setOpenSettingDelete: React.Dispatch<React.SetStateAction<boolean>>;
  openSetting3: boolean;
  setOpenSetting3: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingContext = createContext<SettingContextProps | undefined>(undefined);

export const Settingprovider = ({ children }: { children: React.ReactNode }) => {
  const [openSetting1, setOpenSetting1] = useState(false);
  const [openSetting2, setOpenSetting2] = useState(false);
  const [openSettingDelete, setOpenSettingDelete] = useState(false);
  const [openSetting3, setOpenSetting3] = useState(false);

  return (
    <SettingContext.Provider
      value={{
        openSetting1,
        setOpenSetting1,
        openSetting2,
        setOpenSetting2,
        openSettingDelete,
        setOpenSettingDelete,
        openSetting3,
        setOpenSetting3,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default Settingprovider;
