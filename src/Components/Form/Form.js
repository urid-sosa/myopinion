import { Link } from "react-router-dom";

function Form() {
    return (
        <div className="card" style={{ placeItems:"center", height:"100vh"}}>
            <div className="card-body container" >
                <h5 className="card-title" color="black" >Completar formulario</h5>

              
                    <h5 className="card-title">Sexo</h5>
                    <div className="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Hombre
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label" for="flexCheckChecked">
                            Mujer
                        </label>
                    </div>
             

                
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Fecha de realización de cuestionario</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                
                <h5 className="card-title">Estado</h5>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione el siguiente estado</option>
                    <option value="1">Puebla</option>
                  <option value="2">Morelos</option>
                  <option value="3">CDMX</option>
                  <option value="4">Guanajuato</option>
                  <option value="5">Chihuahua</option>
                  <option value="6">Veracruz</option>
                  <option value="7">Sonora</option>
                  <option value="8">Sinaloa</option>
                  <option value="9">Jalisco</option> 
                  <option value="10">Baja California</option>
                  <option value="11">Baja California Sur</option>
                  <option value="12">Tamaulipas</option>
                  <option value="13">Estado de México</option>
                  <option value="14">Oaxaca</option>
                  <option value="15">Chiapas</option>
                  <option value="16">Michoacán</option>
                  <option value="17">Durango</option>
                  <option value="18">Guerrero</option>
                  <option value="19">Colima</option>
                  <option value="20">Aguascalientes</option>
                  <option value="21">Nuevo León</option>
                  <option value="22">Hidalgo</option>
                  <option value="23">Nayarit</option>
                  <option value="24">Yucatán</option>
                  <option value="25">Tabasco</option>
                  <option value="26">San Luis Potosí</option>
                  <option value="27">Tlaxcala</option>
                  <option value="28">Quintana Roo</option>
                  <option value="29">Querétaro</option>
                  <option value="30">Zacatecas</option>
                  <option value="31">Campeche</option>
                  <option value="32">Coahuila</option>
                </select>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Lugar (Municipio)</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <Link to={'/cuestionario01'}
                class="btn btn-outline-info mr-3"
                role='button'
                aria-pressed="true"
            >
                INICIAR ENCUESTA
            </Link>
            </div>
        </div>
    )
}

export default Form;