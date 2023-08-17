import { useState } from "react";
import styles from './form.module.css'

function Form({onAddUsuario}){

    const [nombre, setNombre] = useState("");
    const [serie, setSerie] = useState("");
    const [datosInvalidos, setDatosInvalidos] = useState("");

    const validacionDatos = (nombre, serie) => {
        if(nombre.length >= 3 && nombre[0] !== " " && serie.length >= 6){
          return true
        } else {
          setDatosInvalidos("Por favor chequea que la información sea correcta")
        }
      }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const datosValidos = validacionDatos(nombre, serie)
        if (datosValidos) {
            onAddUsuario({nombre, serie});
            setNombre("");
            setSerie("");
            setDatosInvalidos("");
        }
    }

    return(
        <div className={styles.form}>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <input type="text" placeholder="Ingresa tu serie favorita" value={serie} onChange={(e)=>setSerie(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
            <h4>
                {datosInvalidos} 
            </h4>
        </div>
    )

}

export default Form;