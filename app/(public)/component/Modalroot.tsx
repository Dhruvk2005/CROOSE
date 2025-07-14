'use client';
import React from 'react';
import { useModal } from '@/app/context/modelcontext';
import Setting1 from '@/app/(private)/components/settingoverview';
import SettingTwo from '@/app/(private)/components/settingoverview2';
import DeletePopup from '@/app/(private)/components/settingoverview3';
import Setting4 from '@/app/(private)/components/settingoverview4';

const ModalRoot = () => {
  const { isSettingsOpen, activeSetting, closeSettings } = useModal();

  if (!isSettingsOpen || !activeSetting) return null;

  return (
    <>
      {activeSetting === 'setting1' && <Setting1 closeModal={closeSettings} />}
      {activeSetting === 'setting2' && <SettingTwo closeSettingTwo={closeSettings} />}
      {activeSetting === 'deletePopup' && <DeletePopup closeDeletePopup={closeSettings} />}
      {activeSetting === 'setting4' && <Setting4 closeSetting4={closeSettings} />}
    </>
  );
};

export default ModalRoot;
