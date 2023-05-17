import React from "react";
import "../stylesheets/item.css"
import { Link } from "react-router-dom"

function Item (props){
    return(
        
        <Link to={"/personaje/" + props.nombre  + "/" + props.edad + "/" + props.procedencia + "/" + props.imagen3 + "/" + props.sexo + "/" + props.fechaDeNacimiento + "/" + props.origen + "/" + props.primeraAparicion + "/" + props.funsion + "/" + props.manga + "/" + props.anime + "/" + props.estatura + "/" + props.peso + "/" + props.ocupacion + "/" + props.familia + "/" + props.kiki + "/" + props.lugarDeEntrenamiento + "/" + props.habilidades + "/" + props.constelacion + "/" + props.tecnicas}> 
  <div className="contenedor-testimonio">
        <article >
        <img 
            className="imgen-testimonio"
            src={require(`../imagenes/${props.imagen}.png`)}
            alt=  {"foto de " + props.nombre} />
        <img className="imagen2" src ={require(`../imagenes/${props.imagen2}.png`)} 
        alt={"foto de" + props.nombre}/>      
                
            </article>
        

        
    </div >
    </Link>
);
} 
export default Item;
