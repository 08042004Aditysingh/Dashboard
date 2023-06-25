import React,{createContext, useContext, useState} from 'react';

const StateContext=createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider=({children})=>{
    const [activeMenu, setActiveMenu]=useState(true);
    const [isClicked, setIsClicked]=useState(initialState);
    const [screenSize, setScreenSize]=useState(undefined);
    const [currentColor, setCurrentColor]=useState('#03C9D7');
    const [currentMode, setCurrentMode]=useState('Light');
    const [themeSettings, setThemeSettings]=useState(false);
    const [profile, setProfile]=useState(true);

    const setMode=(e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setThemeSettings(false);
    }

    const setColor=(mode)=>{
        setCurrentColor(mode);
        localStorage.setItem('colorMode',mode);
        setThemeSettings(false);
    }
    const handleClick=(clicked)=>{
        setIsClicked({...initialState,[clicked]:true});
        setProfile(true);
    };
    const onCancel=()=>{
        setProfile(false);
      };
    return(
        <StateContext.Provider
        value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode,  
        themeSettings, setThemeSettings, setColor, setMode, profile, setProfile, onCancel}}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);
