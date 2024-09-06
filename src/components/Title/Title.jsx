
function Title({ name, lastname, className }) {
        
    return (
    <div className={`title-${className}`}>
        <h1>{name}</h1>
        <h2>{lastname}</h2>
    </div> 
    )
}

export default Title;