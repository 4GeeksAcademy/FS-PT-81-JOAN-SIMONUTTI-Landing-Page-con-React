import React from "react";
import styles from "./card.module.css"

const Card = ({title, text, imagen}) => {
    return (
        <div className={styles.card_container}>
            <img src={imagen} className="card-img-top" alt="img-del-producto"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-outline-light btn-lg">Ver más</a>
                </div>
        </div>
    )
}
export default Card;