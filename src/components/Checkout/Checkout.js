import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
// import { addDoc, collection } from 'firebase/firestore'
import { NotificationContext} from '../../notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase/index'
import { useNavigate } from "react-router-dom"
//import { useOrdersFromFirestore } from "../../Service/Firestore/Orders"
import'../Checkout/Checkout.css'


import ClientForm from "../Form/Form"
import Swal from "sweetalert2"
import { useOrdersFromFirestore } from "../../services/firebase/firestore/Orders"


const Checkout = () => {
    const {clearCart} = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    const [personalData, setPersonalData] = useState(false)
    
    const [datosCompra, setDatosCompra] = useState({}) 

    const completoDatos = (name, surname, address, phone, email) =>{
            setDatosCompra({name, surname, address, phone, email})
            setPersonalData(true)
        }    

    const navigate = useNavigate()

    const { createOrder } = useOrdersFromFirestore()

    const getOrder =()=>{    
        
        setLoading(true)

        

        createOrder(datosCompra).then(response => {
            if(response.result === 'orderCreated') {
                clearCart()
                Swal.fire({
                    title: "Gracias por su compra",
                    text:`El id de su orden es: ${response.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                })
        
                navigate ('/')
            }
        }).catch(error => {
            Swal.fire({
                title:"Ha habido un error",
                icon: false,
                buttons: true,
                dangerMode: true,
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return <div className="conteinerCheckout">
            <h1>Se esta procesando su pedido...</h1>
            <br></br>
            <div className="chaotic-orbit"> </div>
        </div>
    }

    return (    
        <div>
            <h1 className="datosCliente">Completa los datos para generar la orden.</h1>
            <ClientForm completoDatos={completoDatos}/>
            { personalData 
            ?<button className="botonCheckout" onClick={getOrder}>Generar Pedido</button> 
            : ""}
        </div>
    )
}

export default Checkout