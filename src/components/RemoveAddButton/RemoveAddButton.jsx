const RemoveAddButton = ({ children }) => {
    return (
        <div className="container-buttons__remove-add">
        <button>1+</button>
        {children}
        <button>-1</button>
        </div>
    )
}

export default RemoveAddButton;