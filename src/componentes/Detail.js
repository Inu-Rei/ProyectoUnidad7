import React from "react";
import "../stylesheets/Detail.css";
import { useParams } from "react-router-dom";

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



    console.log(nombre + procedencia + edad);
    return (


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
        </div>);
};


export default Detail;