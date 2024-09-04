import Button from "../Button/Button";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map(({ name, href }) => (
                <li className="navbar__item" key={name}>
                    <Button name={name} href={href} />
                </li>
            ))}
        </>
    );
};

export default ItemList;
