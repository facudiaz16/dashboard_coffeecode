import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../assets/chart.css';
import Swal from 'sweetalert2';

Modal.setAppElement('#root');

function Chart() {
    const [listProduct, setListProduct] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editUrl, setEditUrl] = useState("");
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

    const openModal = (productId) => {
        const url = `http://localhost:3000/admin/edit/${productId}?editar=`;
        setEditUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditUrl("");
    };

    const confirmDelete = async (id_producto) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Este producto se eliminará permanentemente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${id_producto}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setListProduct(listProduct.filter(product => product.id_producto !== id_producto));
                    Swal.fire(
                        '¡Eliminado!',
                        'El producto ha sido eliminado con éxito.',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Error',
                        'Hubo un problema al eliminar el producto.',
                        'error'
                    );
                }
            } catch (error) {
                console.error('Error en la petición de eliminación:', error);
                Swal.fire(
                    'Error',
                    'Hubo un error al eliminar el producto.',
                    'error'
                );
            }
        }
    };
    

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
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Región</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {listProduct.map((cafe) => (
                                <tr key={cafe.id_producto}>
                                    <td><img width={'40rem'} src={`${imagen}${cafe.imagen_principal}`} alt="Imagen del producto" /></td>
                                    <td>{cafe.nombre_producto}</td>
                                    <td>{cafe.precio}</td>
                                    <td>{cafe.cantidad}</td>
                                    <td>{cafe.region}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => openModal(cafe.id_producto)}>Editar</button>
                                        <button className="btn btn-danger" onClick={() => confirmDelete(cafe.id_producto)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Editar Producto"
                className="Modal" 
                overlayClassName="Overlay" 
            >
                <iframe
                    src={editUrl}
                    style={{
                        width: "100%",
                        height: "90vh",
                        border: "none",
                      }}
                ></iframe>
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </div>
    );
}

export default Chart;
