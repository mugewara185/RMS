import React from 'react'
import { createContext, useContext, useState } from 'react';

const GlobalContext= createContext();

export const GlobalProvider = ({children}) => {
    const [location, setLocation]= useState(null);
    const [plant, setPlant]= useState(null);
    const [asset, setAsset]= useState(null);
    const [device, setDevice]= useState(null);
    const [usecase, setUsecase]= useState(null);

  return (
    <GlobalContext.Provider value={{
        location, setLocation,
        plant, setPlant,
        asset, setAsset,
        device, setDevice,
        usecase, setUsecase
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext= ()=> useContext(GlobalContext);