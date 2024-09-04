import { useState, useEffect } from "react"

const Dessert = () => {
    const [postres, setPostres] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
            .then(response => response.json())
            .then(data =>setPostres(data.meals))
    }, [])
    

    return (
        <div>

            {
        postres.map(prod => {
            return (
                <div key={prod.idMeal}>
                    <p>{prod.strMeal}</p>
                    <img src={prod.strMealThumb} alt="" />
                </div>
                )
                }).slice(0, 25)
        }
                
        </div>
    )
}

export default Dessert;