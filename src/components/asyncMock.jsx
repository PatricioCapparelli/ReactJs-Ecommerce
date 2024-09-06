
const getProducts = () => {
    const products = [
        {
            id: '1',
            name: 'Mora',
            price: '400',
            category: 'ice-cream',
            img: './src/assets/barry-ice-cream.png',
            stock: '20',
            description: 'descripcion de iphone 12'
        },
        {
            id: '2',
            name: 'Chocolate en taza',
            price: '400',
            category: 'ice-cream',
            img: './src/assets/chocolate-cup.svg',
            stock: '20',
            description: 'descripcion de Motorola Edge 20'
        },
        {
            id: '3',
            name: 'Frambuesa',
            price: '500',
            category: 'ice-cream',
            img: './src/assets/strawberry-ice-cream.png',
            stock: '23',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '4',
            name: 'Menta Granizada',
            price: '300',
            category: 'ice-cream',
            img: './src/assets/cono-menta.png',
            stock: '23',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '5',
            name: 'Arandano',
            price: '500',
            category: 'ice-cream',
            img: './src/assets/cono-arandano.png',
            stock: '23',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '6',
            name: 'Limon y Merengue',
            price: '400',
            category: 'ice-cream',
            img: './src/assets/cono-limon-merengue-min.png',
            stock: '23',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '7',
            name: 'Choco cono',
            price: '700',
            category: 'ice-cream',
            img: './src/assets/cono-choco.png',
            stock: '24',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '8',
            name: 'Cono mixto',
            price: '800',
            category: 'ice-cream',
            img: './src/assets/cono-sabores.png',
            stock: '24',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '9',
            name: 'Vainilla',
            price: '800',
            category: 'ice-cream',
            img: './src/assets/cono-vainilla.jpg',
            stock: '24',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '10',
            name: 'Frutilla',
            price: '600',
            category: 'ice-cream',
            img: './src/assets/helado-de-frutilla.png',
            stock: '24',
            description: 'descripcion de Samgung S21'
        },
        {
            id: '11',
            name: 'Limon a la crema',
            price: '700',
            category: 'ice-cream',
            img: './src/assets/helado-limon.png',
            stock: '24',
            description: 'descripcion de Samgung S21'
        }
    ]
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })

    
}

export default getProducts;