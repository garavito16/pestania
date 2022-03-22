import React from "react";
import './ContenidoTab.css';

const ContenidoTab = (props) => {
    return (
        <div className="contenido">
            <p>{props.contenido}</p>
        </div>
    )
}

export default ContenidoTab;