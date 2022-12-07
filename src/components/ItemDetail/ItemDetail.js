import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
//import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'
import { useCart } from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const { addItem, isInCart, getProductQuantity } = useCart()//useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price
        }
        

        addItem(productToAdd, quantity)
        setNotification('success', 'Se agrego correctamente a su carrito')
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                {
                   
                    isInCart(id) && <Link to='/cart' className='Option' style={{backgroundColor: 'blue'}}>Finalizar compra</Link>
                }
            </footer>
        </article>
    )
}

export default ItemDetail