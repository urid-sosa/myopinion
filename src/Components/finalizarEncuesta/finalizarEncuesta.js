import { Link } from "react-router-dom";

function finalizarEncuesta(){
    return(
        <div className="card" width="300" height="200">
    <div className="card-body">
      <img src="https://www.commbox.io/wp-content/uploads/2020/04/307-1.jpg" width="300" height="200" alt="Después de responder los siguientes cuestionarios, se cierra la encuesta para recopilar información variante conforme a las preguntas que se agregaron, se agradece"/>
      <p className="card-text">¡Hola de nuevo! Estimado/a joven, agradecemos el haber participado en dar respuesta a la encuesta para determinar las necesidades sobre lo que necesita tu comunidad por un bien mayor. En contestar los anteriores cuestionarios, esta encuesta se hizo con el fin de considerar los siguientes temas para entender la situación actual en el ámbito social tanto cultural lo cual se tome una importancia iniciativa de mejorar la comunidad. En este tiempo donde la incertidumbre y las diversas complicaciones que a muchos agobian lo instamos a seguir adelante con valor e iniciativa, hasta aquí terminaste. ¡Saludos Afectuosos!</p>
                <Link to={'/encuestafinalizada'}
                className="btn btn-primary rm-3"
                role='button'
                aria-pressed="true"
            >
                TERMINAR ENCUESTA
            </Link>
    </div>
  </div>
    )
}

export default finalizarEncuesta;