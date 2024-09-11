const ItemButton = ({ className, name, lastname, eventHandler }) => {

    return (
        <button onClick={eventHandler} className={className}>
            {name || lastname}
        </button>
    );
};

export default ItemButton;
