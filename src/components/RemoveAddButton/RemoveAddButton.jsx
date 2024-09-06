import ItemButton from "../ItemButton/ItemButton";

const RemoveAddButton = ({ children, name, lastname }) => {
    return (
        <div className="container-buttons__remove-add">
        <ItemButton name={name} className='footer-item-button'/>
        {children}
        <ItemButton lastname={lastname} className='footer-item-button'/>
        </div>
    )
}

export default RemoveAddButton;