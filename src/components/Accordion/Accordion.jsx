import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { Link } from "react-router-dom";

const AccordionContent = new Map([
    ["Sabores", [
        { name: "Mora", id: "1" },
        { name: "Chocolate", id: "2" },
        { name: "Frambuesa", id: "3" },
        { name: "Frutilla", id: "10" },
        { name: "Vainilla", id: "9" },
        { name: "Arándano", id: "5" },
        { name: "Menta Granizada", id: "4" },
        { name: "Limon a la crema", id: "11" },
        { name: "Limon y Merengue", id: "6" }
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

