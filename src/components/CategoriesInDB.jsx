import { useEffect, useState } from "react";

function CategoriesInDb() {
  const [tiposCafe, setTiposCafe] = useState([]); // Estado para almacenar los tipos de café

  useEffect(() => {
    const fetchTiposCafe = async () => {

      try {
        const response = await fetch('http://localhost:3000/api/tipoProducts');
        const data = await response.json();
  
        setTiposCafe(data.product || []); // Guarda los tipos de café

      } catch (error) {
        console.error('Error al llamar a la API tiposCafe:', error);
      }
    };
    fetchTiposCafe();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Tipos de Cafés</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {tiposCafe.map((tipo) => (
              <div key={tipo.id_tipo_cafe} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{tipo.nombre_cafe}</div>
                </div>
              </div>
            ))}
            {tiposCafe.length === 0 && <p>No se encontraron tipos de café</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
