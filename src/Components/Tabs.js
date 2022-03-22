import React,{useState} from 'react';
import './Tabs.css';

const Tabs = (props) => {

    const onClickHandler = (e,indice) => {
        e.preventDefault();
        let valor = props.datos.filter(item => item.nombre === "Tab"+indice);
        props.cambiarTab(valor[0].content);

        for (let index = 0; index < props.datos.length; index++) {
            document.getElementById("botoncito"+(index+1)).style.backgroundColor = "gray";
        }
        
        document.getElementById("botoncito"+indice).style.backgroundColor = "black";
    }

    document.body.onload = function() {
        document.getElementById("botoncito1").style.backgroundColor = "black";
    }

    return(
        props.datos.map((tab,indice) => {
            return (
                <div className="divBotoncito" key={"div_"+indice}>
                    <button className='botoncito' id={"botoncito"+(indice+1)} 
                        onClick={(e) => onClickHandler(e, indice+1)}>{tab.nombre}</button>
                </div>
            )
        })
    );
}

export default Tabs;