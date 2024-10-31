
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';


function ContentRowProducts() {

  const [cantidadUsuarios, setCantidadUsuarios] = useState(0);

  useEffect(() => {
    const fetchCantidadUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        setCantidadUsuarios(data.count);
      } catch (error) {
        console.error('Error al llamar a la API users:', error);
      }
    };

    fetchCantidadUsuarios();
  }, []);

  let moviesInDB = {
    title: 'Productos en BD',
    color: 'primary',
    cuantity: 21,
    icon: 'fa-clipboard-list'
  }

  /* <!-- Total awards --> */

  let totalAwards = {
    title: ' Total Categorias',
    color: 'success',
    cuantity: '79',
    icon: 'fa-award'
  }



  let usersCount = {
    title: 'Total Usuarios',
    color: 'warning',
    cuantity: cantidadUsuarios,
    icon: 'fa-user-check'
  }

  let cartProps = [moviesInDB, totalAwards, usersCount];
  return (

    <div className="row">

      {cartProps.map((movie, i) => {

        return <SmallCard {...movie} key={i} />

      })}

    </div>
  )
}

export default ContentRowProducts;