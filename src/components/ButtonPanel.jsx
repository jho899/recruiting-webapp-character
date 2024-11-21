const ButtonPanel = (props) => {
    const { attribute, handleUpdate } = props;

    const handleClick = (val) => {
        val > 0 ? handleUpdate(attribute, val) : handleUpdate(attribute, val);
    }

    return (
        <>
            <button onClick={() => handleClick(1)}>+</button>
            <button onClick={() => handleClick(-1)}>-</button>
        </>
    );
}

export default ButtonPanel;
