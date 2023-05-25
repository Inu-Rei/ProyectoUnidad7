import "../stylesheets/Detail.css";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";


const Detail = () => {
    let { nombre } = useParams()
    let { imagen3 } = useParams()
    let { sexo } = useParams()
    let { fechaDeNacimiento } = useParams()
    let { edad } = useParams()
    let { origen } = useParams()
    let { primeraAparicion } = useParams()
    let { funsion } = useParams()
    let { manga } = useParams()
    let { anime } = useParams()
    let { estatura } = useParams()
    let { peso } = useParams()
    let { ocupacion } = useParams()
    let { procedencia } = useParams()
    let { familia } = useParams()
    let { kiki } = useParams()
    let { lugarDeEntrenamiento } = useParams()
    let { habilidades } = useParams()
    let { constelacion } = useParams()
    let { tecnicas } = useParams()
    let { imagen4 } = useParams()

    const navigate = useNavigate()
    function login() {
        navigate('/')
    }

    const listado = useNavigate()
    function Listado() {
        listado('/Listado')
    }

    const handleOnClick = () => {
        window.location.href = 'https://www.youtube.com/@inurei3689';
    };



    console.log(nombre + procedencia + edad);
    return (
        <>
            <center> <nav>
                <br /><br />
                <button className="buttonMenu" onClick={login} >Cerrar Sesion</button>
                <br /><br />
                <button className="buttonMenu" onClick={Listado} >item</button><br /><br />
            </nav></center>

            <div className="contenedor-title">
                <strong>  <h1>Caballero Dorado {nombre}</h1></strong>
                <div className="contenedor-caracteristicas">

                    <div className="contenedor-imagen">
                        <img
                            className="imagen"
                            src={require(`../imagenes/${imagen3}.png`)}
                            alt={"foto de " + nombre} />
                    </div>

                    <div className="contenedor-texto">
                        <p className="caracteristicas">
                            <strong>Nombre : {nombre} <br /></strong>
                            <strong> sexo : {sexo}<br /> </strong>
                            <strong> fecha de nacimiento : {fechaDeNacimiento}<br /></strong>
                            <strong> edad : {edad}<br /></strong>
                            <strong> origen : {origen}<br /></strong>
                            <strong>  primera aparicion : {primeraAparicion}<br /></strong>
                            <strong> funsion : {funsion}<br /></strong>
                            <strong> Manga : {manga}<br /></strong>
                            <strong>  anime : {anime}<br /></strong>
                            <strong>estatura : {estatura}<br /> </strong>
                            <strong> peso : {peso}<br /></strong>
                            <strong>ocupacion : {ocupacion}<br /></strong>
                            <strong> procedencia : {procedencia}<br /></strong>
                            <strong> familia : {familia}<br /> </strong>
                            <strong> kiki : {kiki}<br /> </strong>
                            <strong>   lugar de entrenamiento :{lugarDeEntrenamiento}<br /></strong>
                            <strong> habilidades : {habilidades}<br /></strong>
                            <strong>  constelacion : {constelacion}<br /></strong>
                            <strong>  tecnicas : {tecnicas}<br /></strong>
                        </p>
                    </div>
                </div>

                <Container>
                    <div className="ratio ratio-21x9">
                        <iframe src="https://www.youtube.com/embed/u8yDEeKszas" title="YouTube video" allowfullscreen></iframe>
                        
                    </div>
                </Container>

            </div>
            <footer className="pie-pagina">
                
                <br /><br />
                
                <div className="box">
                <strong> <p className="creador">Sobre Nostros
                            <br />Ronald Fabian  Ramos Sierra
                            <br /> Estudiante Front End
                            <br /> Universidad Distrital Francisco José de Caldas</p>
                        </strong><strong><p className="siguenos" >SIGUENOS</p></strong>
                        
                        <button className="canal" onClick={() => handleOnClick()} >Go to YouTube Channel</button>

                        <center> <img className="imagen-footer" src={require(`../imagenes/${imagen4}.png`)} alt={"foto de " + nombre} /></center>
                        
                    
                </div>
            </footer>
        </>
    );
};


export default Detail;