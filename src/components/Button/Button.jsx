const Button = ({ name, href = '#', className, ...props }) => {
    
    return  <a href={href} className={`button ${className}`} {...props}>
                {name}
            </a>
    
};


export default Button;
