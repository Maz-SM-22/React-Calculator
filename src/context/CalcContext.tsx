import React, { createContext, useState } from 'react';

type CalcContextProps = {
    children: React.ReactNode;
}

export const CalcContext = createContext<any>(undefined);

const CalcProvider = ({ children }: CalcContextProps) => {
    const [calc, setCalc] = useState({
        sign: '',
        num: 0,
        res: 0
    })

    const providerValue = { calc, setCalc };

    return (
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    )
}

export default CalcProvider; 