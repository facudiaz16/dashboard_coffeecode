
import ChartRow from './ChartRow';



let tableRowsData = [
    {
        Nombre: 'API AROMA ',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
]

import { useState, useEffect } from 'react';
function Chart() {

    const [listProduct, setListProduct] = useState([]);
    const imagen = "http://localhost:3000/img/products/";

    useEffect(() => {
        const fetchListProduct = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                const data = await response.json();
               
                    setListProduct(data.product || []);
               
            } catch (error) {
                console.error('Error al llamar a la API products:', error);
            }
        };

        fetchListProduct();
    }, []);

    if (!listProduct) {
        return <p>Cargando productos...</p>;
    }

    return (
       
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Región</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Región</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        { listProduct.map((cafe) =>(
                            <tr key={cafe.id_producto}>
                            
                                <td><img width={'40rem'} src={`${imagen}${cafe.imagen_principal}`}/></td>
                                <td>{cafe.nombre_producto}</td>
                                <td>{cafe.precio}</td>
                                <td>{cafe.cantidad}</td>
                                <td>{cafe.region}</td>
                            </tr>
                        ))
                        }
                            {/* {
                                tableRowsData.map((row, i) => {
                                    return <ChartRow {...row} key={i} />
                                })
                            } */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;