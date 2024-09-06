const Button = ({ name, href = '#', className, ...props }) => {

    function eventHandler(){
        
    }
    
    return  <a href={href} className={`button ${className}`} {...props}>
                {name}
            </a>
    
};


export default Button;
