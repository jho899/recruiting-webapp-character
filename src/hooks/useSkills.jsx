import { useCallback, useState } from "react";
// { name: 'Acrobatics', attributeModifier: 'Dexterity' },
// { name: 'Animal Handling', attributeModifier: 'Wisdom' },
// { name: 'Arcana', attributeModifier: 'Intelligence' },
// { name: 'Athletics', attributeModifier: 'Strength' },
// { name: 'Deception', attributeModifier: 'Charisma' },
// { name: 'History', attributeModifier: 'Intelligence' },
// { name: 'Insight', attributeModifier: 'Wisdom' },
// { name: 'Intimidation', attributeModifier: 'Charisma' },
// { name: 'Investigation', attributeModifier: 'Intelligence' },
// { name: 'Medicine', attributeModifier: 'Wisdom' },
// { name: 'Nature', attributeModifier: 'Intelligence' },
// { name: 'Perception', attributeModifier: 'Wisdom' },
// { name: 'Performance', attributeModifier: 'Charisma' },
// { name: 'Persuasion', attributeModifier: 'Charisma' },
// { name: 'Religion', attributeModifier: 'Intelligence' },
// { name: 'Sleight of Hand', attributeModifier: 'Dexterity' },
// { name: 'Stealth', attributeModifier: 'Dexterity' },
// { name: 'Survival', attributeModifier: 'Wisdom' },
export const useSkills = () => {
    const [acrobatics, setAcrobatics] = useState(0);
    const [animalhandling, setAnimalHandling] = useState(0);
    const [arcana, setArcana] = useState(0);
    const [athletics, setAtheletics] = useState(0);
    const [deception, setDeception] = useState(0);
    const [history, setHistory] = useState(0);
    const [insight, setInsight] = useState(0);
    const [intimidation, setIntimidation] = useState(0);
    const [investigation, setInvestigation] = useState(0);
    const [medicine, setMedicine] = useState(0);
    const [nature, setNature] = useState(0);
    const [perception, setPerception] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [religion, setReligion] = useState(0);
    const [sleightofhand, setSleightOfHand] = useState(0);
    const [stealth, setStealth] = useState(0);
    const [survival, setSurvival] = useState(0);


    const handleSkillUpdate = useCallback((skill, value) => {
        switch (skill) {
            case 'acrobatics':
                setAcrobatics(value);
                break;
            case 'animalhandling':
                setAnimalHandling(value);
                break;
            case 'arcana':
                setArcana(value);
                break;
            case 'athletics':
                setAtheletics(value);
                break;
            case 'deception':
                setDeception(value);
                break;
            case 'history':
                setHistory(value);
                break;
            case 'insight':
                setInsight(value);
                break;
            case 'intimidation':
                setIntimidation(value);
                break;
            case 'investigation':
                setInvestigation(value);
                break;
            case 'medicine':
                setMedicine(value);
                break;
            case 'nature':
                setNature(value);
                break;
            case 'perception':
                setPerception(value);
                break;
            case 'performance':
                setPerformance(value);
                break;
            case 'persuasion':
                setPersuasion(value);
                break;
            case 'religion':
                setReligion(value);
                break;
            case 'sleightofhand':
                setSleightOfHand(value);
                break;
            case 'stealth':
                setStealth(value);
                break;
            case 'survival':
                setSurvival(value);
                break;
            default:
                break;
        }
    }, []);

    return { skillsObj: { acrobatics, animalhandling, arcana, athletics, deception, history, insight, intimidation, investigation, 
        medicine, nature, perception, performance, persuasion, religion, sleightofhand, stealth, survival }, handleSkillUpdate };
}