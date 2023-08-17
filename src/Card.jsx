import styles from './card.module.css'

function Card({usuarios}){
    return (
        <div className={styles.card}>
            {usuarios.map((usuario, index) => (
            <div key={index} className="card">
                <p>Hola {usuario.nombre}! <br/>
                Sabemos que tu serie favorita es: </p>
                <h2>{usuario.serie}</h2>
            </div>
          ))}
        </div>
      );
}

export default Card;