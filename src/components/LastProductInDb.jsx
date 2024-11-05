import { useState, useEffect } from 'react';

function LastProductInDb() {
    const [lastProduct, setLastProduct] = useState(null);
    const imagen = "http://localhost:3000/img/products/";

    useEffect(() => {
        const fetchLastProduct = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                const data = await response.json();
                //  console.log("Respuesta de la API:", data);
                if (data.product && data.product.length > 0) {
                    setLastProduct(data.product[data.product.length - 1]);
                }
            } catch (error) {
                console.error('Error al llamar a la API products:', error);
            }
        };

        fetchLastProduct();
    }, []);

    if (!lastProduct) {
        return <p>Cargando el último producto...</p>;
    }

    return (
        <div className="col-lg-6 mb-4 text-center">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Detalle del Último Producto Cargado</h5>
                </div>
                <div className="card-body">
                <h5 className="m-0 font-weight-bold text-gray-800">{lastProduct.nombre_producto}</h5>
                    <div className="text-center">                      
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={`${imagen}${lastProduct.imagen_principal}`} alt="Nombre del Producto" />
                        <h5 className="m-0 font-weight-bold text-gray-800">{lastProduct.descripcion_corta}</h5>
                    </div>
                    <div className="text-center">
                        <hr/>
                     
                        <p>{lastProduct.descripcion_larga}</p>
                       
                    </div>
                   
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a> */}
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href={`#products/${lastProduct.id_producto}`}>Ver detalle del producto</a> */}
                </div>
            </div>
        </div>
    );
}

export default LastProductInDb;