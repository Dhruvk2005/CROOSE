'use client';
import React, { createContext, useState, useContext } from 'react';

type SettingType = 'setting1' | 'setting2' | 'deletePopup' | 'setting4' | null;

interface ModalContextType {
  isSettingsOpen: boolean;
  activeSetting: SettingType;
  openSettings: () => void;
  closeSettings: () => void;
  openSpecificSetting: (setting: SettingType) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: any) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSetting, setActiveSetting] = useState<SettingType>(null);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => {
    setIsSettingsOpen(false);
    setActiveSetting(null);
  };

  const openSpecificSetting = (setting: SettingType) => {
    setActiveSetting(setting);
    setIsSettingsOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isSettingsOpen,
        activeSetting,
        openSettings,
        closeSettings,
        openSpecificSetting,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
