import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalProvider = ({children})=>{
    const[number, setNumber] = React.useState(10);
    function increase(){
        setNumber(prevNum => prevNum+1);
    }
    function decrease(){
        setNumber(prevNum => prevNum-1);
    }
    function setVal(num){
        setNumber(num);
    }
    return (<GlobalContext.Provider value={{number,increase,decrease,setVal,setNumber}}>
        {children}
    </GlobalContext.Provider>)
}