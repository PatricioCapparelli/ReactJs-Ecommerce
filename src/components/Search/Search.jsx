import Item from "../Item/Item";
import { MagicMotion } from "react-magic-motion";
import { useState } from "react";

export default function Search({ products }) {
    const [searchText, setSearchText] = useState("");

    const onChangeText = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <div className="search-container">
            <label className="search-label" htmlFor="searchInput">Busca tu gusto</label>
            <input
                className="search-input"
                id="searchInput"
                placeholder="Sabores"
                type="text"
                maxLength={70}
                value={searchText}
                onChange={onChangeText}
            />
            <h4 className="search-container__title">Ice Cream</h4>
            <MagicMotion>
                <div className="search-container__main">
                    {products
                        .filter(({ name }) =>
                            name
                                .toLowerCase()
                                .trim()
                                .includes(searchText.toLowerCase().trim())
                        )
                        .map(prod => (
                            <Item
                                key={prod.id}
                                className={prod.stock === '24' ? 'card-white__item' : 'card-item'}
                                {...prod}
                            />
                        ))}
                </div>
            </MagicMotion>
        </div>
    );
}
