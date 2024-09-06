import { NavLink } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map(({ name, href }) => (
                <li className="navbar__item" key={name}>
                    <NavLink to={href}>{name}</NavLink>
                </li>
            ))}
        </>
    );
};

export default ItemList;
