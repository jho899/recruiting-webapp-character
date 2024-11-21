import { useCallback } from 'react';
import { ATTRIBUTE_LIST } from '../consts';
import { useAttributes } from '../hooks/useAttributes';
import ButtonPanel from '../components/ButtonPanel';
import { ColumnContainer } from '../App';


const AttributesTable = () => {
  const { strength, dexterity, constitution, intelligence, wisdom, charisma, handleUpdate } = useAttributes();

  const getAttributeList = useCallback(() => {
    let attributes = [];
    ATTRIBUTE_LIST.forEach((attribute) => {
      let state;
      switch (attribute) {
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
      attributes.push(
        <div>
          {attribute}: {state[0]}(Modifier: {state[1]}) <ButtonPanel attribute={attribute} handleUpdate={handleUpdate}/>
        </div>
      )
    })
    return <ColumnContainer>{attributes}</ColumnContainer>;
  }, [charisma, constitution, dexterity, handleUpdate, intelligence, strength, wisdom])
  

  return (
    <ColumnContainer>
        ATTRIBUTES
        {getAttributeList()}
    </ColumnContainer>
  );
}

export default AttributesTable;
