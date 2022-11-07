//Representacion de mi base de datos 
const products =  [
    { 
        id: '1', 
        name: 'Alimento Proplan', 
        price: 10000, 
        category: 'alimento balanceado', 
        img:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/purina-pro-plan-flagship-perros-puppy-razas-medianas.png', 
        // img: '/images/nombredeimagen.jpg',
        stock: 25, 
        description:'Alimento para perros de 22kg'
    },
    { 
        id: '2', 
        name: 'Alimento VitalCan', 
        price: 8350, 
        category: 'alimento balanceado', 
        img:'https://www.vitalcan.com/wp-content/uploads/2021/05/Envases-premium-perro-adulto-peque-@2x.png', 
        stock: 16, 
        description:'Alimento Balanceado 15kg'
    },
    { 
        id: '3', 
        name: 'Alimento Royal Canin', 
        price: 12000, 
        category: 'alimento medicado', 
        img:'https://http2.mlstatic.com/D_NQ_NP_683982-MLA46350435470_062021-O.jpg', 
        stock: 10, 
        description:'Alimento Balanceado medicado 15kg'
    },
    { 
        id: '4', 
        name: 'Mordillo con sopapa y pelota', 
        price: 2500, 
        category: 'juguetes', 
        img:'https://http2.mlstatic.com/D_NQ_NP_891900-MLA50895226654_072022-O.webp', 
        stock: 10, 
        description:'Juguete con ideal material para que jugue nuestras mascotas'
    },
    { 
        id: '5', 
        name: 'Peluche con cifle', 
        price: 1100, 
        category: 'juguetes', 
        img:'https://http2.mlstatic.com/D_NQ_NP_964474-MLA48682873409_122021-V.webp', 
        stock: 10, 
        description:'Juguete ideal para mascotas'
    }
]
//Representacion de las API
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


//Ya tengo todos mis products de asynMock.js en Firebase 