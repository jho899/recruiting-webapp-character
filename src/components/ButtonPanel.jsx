const ButtonPanel = (props) => {
    const { attribute, handleUpdate } = props;

    const handleClick = (val) => {
        handleUpdate(attribute, val);
    }

    return (
        <>
            <button onClick={() => handleClick(1)}>+</button>
            <button onClick={() => handleClick(-1)}>-</button>
        </>
    );
}

export default ButtonPanel;
