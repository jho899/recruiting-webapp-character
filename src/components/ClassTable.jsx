import { ColumnContainer } from "../App";
import { useAttributes  } from "../hooks/useAttributes";
import { CLASS_LIST } from "../consts";
import styled from "styled-components";
import { useState } from "react";

const ClassText = styled.div`
    color: ${props => (props.canspec ? 'red' : 'white')};
`;

const ClassTable = () => {
    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = useAttributes();
    const [showMinReq, setShowMinReq] = useState();

    const validStats = (classStats) => {
        return (
            strength[0] >= classStats.Strength &&
            dexterity[0] >= classStats.Dexterity&&
            constitution[0] >= classStats.Constitution && 
            intelligence[0] >= classStats.Intelligence &&
            wisdom[0] >= classStats.Wisdom &&
            charisma[0] >= classStats.Charisma
        );

    }

    const canSpec = (cls) => {
        switch (cls) {
            case 'Barbarian':
                return validStats(CLASS_LIST.Barbarian);
            case 'Bard':
                return validStats(CLASS_LIST.Bard);
            case 'Wizard':
                return validStats(CLASS_LIST.Wizard);
            default:
                return false;
        }
    }

    const getClass = () => {
        const classes = Object.keys(CLASS_LIST).map(cls => <ClassText canspec={canSpec(cls)} onClick={() => handleShowReq(cls)}>{cls}</ClassText>);
        return <ColumnContainer>{classes}</ColumnContainer>;
    }

    const handleShowReq = (cls) => {
        setShowMinReq(cls);
    }

    const getMinReq = () => {
        let entries = [];
        switch (showMinReq) {
            case 'Barbarian':
                entries = [...Object.entries(CLASS_LIST.Barbarian)].map(([attr, val]) => <div>{attr}: {val}</div>);
                entries.unshift(<div>Barbarian Min Reqs</div>);
                break;
            case 'Bard':
                entries = [...Object.entries(CLASS_LIST.Bard)].map(([attr, val]) => <div>{attr}: {val}</div>);
                entries.unshift(<div>Bard Min Reqs</div>);
                break;
            case 'Wizard':
                entries = [...Object.entries(CLASS_LIST.Wizard)].map(([attr, val]) => <div>{attr}: {val}</div>);
                entries.unshift(<div>Wizard Min Reqs</div>);
                break;
            default:
                break;
        }

        const handleCloseReqs = () => {
            setShowMinReq();
        }
        entries.push(<button onClick={handleCloseReqs}>Close Requirements</button>)
        return <ColumnContainer>{entries}</ColumnContainer>
    }

    return (
        <ColumnContainer>
        <div>CLASSES</div>
            {getClass()}
            {showMinReq ? getMinReq() : null}
        </ColumnContainer>
    );
}

export default ClassTable;
