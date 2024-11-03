
import ChartRow from './ChartRow';



let tableRowsData = [
    {
        Nombre: 'API AROMA ',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'ORACLE',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'SCRIPT',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'STACK LATTE',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'SYNTAX LATTE',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'LOGIC',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'FULL STACK',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Nombre: 'EXPRESS',
        Presentacion: ['250grs', '1kg'],
        Tipo: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },






]


function Chart() {
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Presentacion</th>
                                <th>Tipo de cafe</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Presentacion</th>
                                <th>Tipo de cafe</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                tableRowsData.map((row, i) => {
                                    return <ChartRow {...row} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;