import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';


function ContentRowProducts() {

  const [cantidadUsuarios, setCantidadUsuarios] = useState(0);
  const [productos, setProductos] = useState(0);
  const [tipos, setTipos] = useState(0);
 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProductos(data.count ?? 0);
      } catch (error) {
        console.error('Error al llamar a la API products:', error)
      }
    }

    const fetchTiposProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tipoProducts');
        const data = await response.json();
        setTipos(data.count ?? 0);
      } catch (error) {
        console.error('Error al llamar a la API TiposProducts:', error);
      }
    };

    const fetchCantidadUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        setCantidadUsuarios(data.count ?? 0);
      } catch (error) {
        console.error('Error al llamar a la API users:', error);
      }
    };
    fetchProductos();
    fetchTiposProductos();
    fetchCantidadUsuarios();
  }, []);


  let productsInDB = {
    title: 'Productos en BD',
    color: 'primary',
    cuantity: productos,
    icon: 'fa-clipboard-list'
  }

  /* <!-- Total tipos de café --> */
  let types = {
    title: ' Total Tipos de Café',
    color: 'success',
    cuantity: tipos,
    icon: 'fa-award'
  }

  let usersCount = {
    title: 'Total Usuarios',
    color: 'warning',
    cuantity: cantidadUsuarios,
    icon: 'fa-user-check'
  }

  let cartProps = [productsInDB, types, usersCount];

  return (

    <div className="row">

      {cartProps.map((cart, i) => {

        return <SmallCard {...cart} key={i} />

      })}
    </div>
  )
}

export default ContentRowProducts;