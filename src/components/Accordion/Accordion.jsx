import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { Link } from "react-router-dom";

const AccordionContent = new Map([
    ["Sabores", [
        { name: "Mora", id: "item-0" },
        { name: "Chocolate", id: "item-1" },
        { name: "Frambuesa", id: "item-2" },
        { name: "Frutilla", id: "item-9" },
        { name: "Vainilla", id: "item-8" },
        { name: "Arándano", id: "item-4" },
        { name: "Menta Granizada", id: "item-3" },
        { name: "Limon a la crema", id: "item-10" },
        { name: "Limon y Merengue", id: "item-5" },
        { name: "Cono mixto", id: "item-7" }
    ]]
]);

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="accordion-container">
            <MagicMotion transition={{ type: "spring", stiffness: 200, damping: 15 }}>
                <menu className={`accordion-menu ${isOpen ? 'accordion-menu-open' : ''}`}>
                    <header
                        className="accordion-header"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? (
                            <>
                                <span>🍦 Sabores!</span>
                                <button className="accordion-header-button">
                                    ⬅️
                                </button>
                            </>
                        ) : (
                            <span>🍦 Sabores!</span>
                        )}
                    </header>
                    {isOpen && (
                        <ul className="accordion-list">
                            {AccordionContent.get("Sabores")?.map((item) => (
                                <li
                                    key={item.id}
                                    className="accordion-list-item"
                                >
                                    <Link to={`/detail/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </menu>
            </MagicMotion>
        </div>
    );
};

export default Accordion;

