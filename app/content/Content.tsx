'use client';

import React, { useContext } from 'react';
import Setting1 from '../(private)/components/setting1';
import SettingTwo from '../(private)/components/setting2';
import DeletePopup from '../(private)/components/settingDelete';
import Setting3 from '../(private)/components/setting3';
import { SettingContext } from '@/app/context/SettingContext'; 
const Content = ({ children }: { children: React.ReactNode }) => {
    const {
        openSetting1,
        openSetting2,
        openSetting3,
        openSettingDelete,
    } = useContext(SettingContext)!;

    return (
        <>
            {children}
            {openSetting1 && <Setting1 />}
            {openSetting2 && <SettingTwo />}
            {openSetting3 && <Setting3 />}
            {openSettingDelete && <DeletePopup />}
        </>
    );
};

export default Content;
