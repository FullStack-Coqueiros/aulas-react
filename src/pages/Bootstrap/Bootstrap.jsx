// import globoPng from '../../assets/globo.png';

function Bootstrap() {
    return (
        <div className="container">
            {/* <div className="row">
                <h3>Título</h3>

                <div className="col-6" style={{ 'background': 'black'}}>
                    <button className="btn btn-primary">COL1</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-success w-100">COL2</button>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger w-50">COL3</button>
                </div>
            </div> */}

            <img src="src/assets/globo.png" />

            <div className="row">
                <h4>Informações Rápidas de Pacientes</h4>
                
                
                <div className="col-10">
                    <input className="w-100" placeholder="Digite o nome do paciente"/>
                </div>

                <div className="col-2">
                    <button className="btn btn-outline-secondary w-100">Buscar</button>
                </div>
            </div>


        </div>
    )
}

export default Bootstrap