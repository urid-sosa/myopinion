import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="card" width="300" height="200">
           <div className="card-body">
            <img src="http://strategamagazine.com/wp-content/uploads/2017/06/melendez.jpg" width="300" height="200" alt="Las preguntas surgirán después de acceder con el boton de iniciar encuesta con el motivo de responder de manera seriamente"/>
            <h4 className="card-title" style={{color: '#2aa2e7'}}>MyOpinion</h4>
            <h6 className="card-subtitle mb-2 text-muted">Encuesta sobre la sociedad de la información</h6>
            <p className="card-text">¡Bienvenido seas! La siguiente aplicación recopilará información importante en obtener datos anuales para aquellos jóvenes que están interesados en compartir su opinión acerca de lo que se debería crear en cada municipio, región o comunidad dentro del estado de Puebla. Información sobre las necesidades de cualquier tipo de interés en el ámbito social y cultural. Si estás dispuesto a aceptar, por supuesto que puedes acceder a los siguientes cuestionarios para aportar un grano para tu comunidad. ¿Estás listo?</p>
            <Link to={'/form'}
                className=" btn btn-primary mr-3"
                role='button'
                aria-pressed="true"
            >
                INICIAR ENCUESTA
            </Link>
           </div>
        </div>
    )
}

export default Home;