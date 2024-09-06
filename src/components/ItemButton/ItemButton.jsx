const ItemButton = ({ className, name, lastname }) => {
    return (
        <button className={className}>
            {name || lastname}
        </button>
    );
};

export default ItemButton;
