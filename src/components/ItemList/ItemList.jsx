import { NavLink } from "react-router-dom";

const ItemList = ({ items, className }) => {
    return (
        <>
            {items.map(({ name, href }) => (
                <li className={className} key={name}>
                    <NavLink to={href}>{name}</NavLink>
                </li>
            ))}
        </>
    );
};

export default ItemList;
