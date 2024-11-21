import { useEffect, useState } from 'react';
import { SKILL_LIST } from '../consts';
import { useAttributes } from '../hooks/useAttributes';
import ButtonPanel from '../components/ButtonPanel';
import { ColumnContainer } from '../App';
import { useSkills } from '../hooks/useSkills';

const SkillsTable = () => {
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = useAttributes();
  const { skillsObj, handleSkillUpdate } = useSkills();
  const [skillPoints, setSkillPoints] = useState(10);
  const [usedSkillPoints, setUsedSkillPoints] = useState(0);

  useEffect(() => {
    let newPoints = intelligence[1] * 4 + 10;
    setSkillPoints(newPoints);
  }, [intelligence])

  // NO TIME BUT NEED TO HANDLE IF NEGATIVE MODIFIER, HOW TO HANDLE NEGATIVE SKILL VALUES 
  const handleUsePoints = (attr, val) => {
    let used = usedSkillPoints + val;
    if (used >= 0) {
        let skillsKey = attr.name.toLowerCase().replaceAll(" ", "");
        setUsedSkillPoints(used)
        val > 0 ? handleSkillUpdate(skillsKey, skillsObj[skillsKey] + 1) : handleSkillUpdate(skillsKey, skillsObj[skillsKey] - 1);
    }
  }

  const showSkills = () => {

    let skills = SKILL_LIST.map((skill) => {
        let state;
        switch (skill.attributeModifier) {
        case 'Strength':
            state = strength;
            break;
        case 'Dexterity':
            state = dexterity;
            break;
        case 'Constitution':
            state = constitution;
            break;
        case 'Intelligence':
            state = intelligence;
            break;
        case 'Wisdom':
            state = wisdom;
            break;
        case 'Charisma':
            state = charisma;
            break;
        default:
            break;
        }
        return (<div>{skill.name}: {skillsObj[skill.name.toLowerCase().replaceAll(" ", "")]} (Modifier: {skill.attributeModifier}): {state[1]} <ButtonPanel attribute={skill} handleUpdate={handleUsePoints}/> total: {skillsObj[skill.name.toLowerCase().replaceAll(" ", "")] + state[1]}</div>)
    });

    return skills;
  }

  return (
    <ColumnContainer>
        <div>SKILLS</div>
        <div>Total skill points: {skillPoints}</div>
        <div>Skill points remaining: {skillPoints - usedSkillPoints}</div>
        {showSkills()}
    </ColumnContainer>
  );
}

export default SkillsTable;
