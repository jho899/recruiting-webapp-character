import React, { useCallback, useContext, useState } from "react";

const AttributesContext = React.createContext('attributes');
export const AttributesProvider = ({children}) => { 
    const [strength, setStrength] = useState([10, 0]);
    const [dexterity, setDexterity] = useState([10, 0]);
    const [constitution, setConstitution] = useState([10, 0]);
    const [intelligence, setIntelligence] = useState([10, 0]);
    const [wisdom, setWisdom] = useState([10, 0]);
    const [charisma, setCharisma] = useState([10, 0]);

    const handleUpdate = useCallback((attribute, value) => {
        switch (attribute) {
            case 'Strength':
                strength[0] += value;
                strength[1] = Math.floor((strength[0] - 10) / 2);
                setStrength([...strength]);
                break;
            case 'Dexterity':
                dexterity[0] += value;
                dexterity[1] = Math.floor((dexterity[0] - 10) / 2);
                setDexterity([...dexterity]);
                break;
            case 'Constitution':
                constitution[0] += value;
                constitution[1] = Math.floor((constitution[0] - 10) / 2);
                setConstitution([...constitution]);
                break;
            case 'Intelligence':
                intelligence[0] += value;
                intelligence[1] = Math.floor((intelligence[0] - 10) / 2);
                setIntelligence([...intelligence]);
                break;
            case 'Wisdom':
                wisdom[0] += value;
                wisdom[1] = Math.floor((wisdom[0] - 10) / 2);
                setWisdom([...wisdom]);
                break;
            case 'Charisma':
                charisma[0] += value;
                charisma[1] = Math.floor((charisma[0] - 10) / 2);
                setCharisma([...charisma]);
                break;
            default:
                break;
        }
    }, [charisma, constitution, dexterity, intelligence, strength, wisdom])
    return (
        <AttributesContext.Provider value={{strength, dexterity, constitution, intelligence, wisdom, charisma, handleUpdate}}>
            {children}
        </AttributesContext.Provider>
    );
}

export const useAttributes = () => {
    const { strength, dexterity, constitution, intelligence, wisdom, charisma, handleUpdate } = useContext(AttributesContext);

    return { strength, dexterity, constitution, intelligence, wisdom, charisma, handleUpdate };
}