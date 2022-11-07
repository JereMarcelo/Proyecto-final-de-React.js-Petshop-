import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect (() => {

    const collectionRef = collection(db, 'categories')

    getDocs(collectionRef).then(response => {
      console.log(response)
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  },[])




  return (
    <nav className="NavBar" >
      <NavLink to='/'>
          <img src='https://i.pinimg.com/originals/fa/83/71/fa8371812bac7c144689254f677ca962.png' style={{width:100 }} />
      </NavLink>

        <div className="Categories">
          {
            categories.map(cat => (
              <NavLink key={cat.id} to={'/category/${cat.slug}' } className={({ isActive}) => isActive? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))
          }
            {/*<NavLink to={'/category/alimento balanceado'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimento Balanceado</NavLink>
            <NavLink to={'/category/alimento medicado'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimento Medicado</NavLink>
            <NavLink to={'/category/juguetes'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juguetes</NavLink>*/}
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar