// import './Card.css'
// import Button from '../Button/Button'
// import { useState } from 'react'


// const Card = ({url, nombre, description}) => {
//     const [enable, setEnable] = useState(true)
//     const [text, setText] = useState('new')

//     let handleText = (e) => {
//         setText(e.target.value);
//     }


//     return (
//         <div className='card'>
//             <h1>{nombre}</h1>
        
//             <input type="text" onChange={handleText}/>
//             <p>{text}</p>
            
//             <button onClick={() => setEnable(!enable)}>{enable ? 'Black/White' : 'ocult'}</button>
            
//             {enable === true && <img src={url} alt="" />}

//             {enable ? <p className='enable'>{description}</p> : <p className='disable'>{description = 'okult'}</p>}
//         </div>

//     )
// }

// export default Card;