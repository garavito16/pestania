import Tabs from "./Components/Tabs";
import ContenidoTab from "./Components/ContenidoTab";
import React, {useState} from "react";

function App() {

  const datos = [
    {
      nombre : 'Tab1',
      content :'Tab 1 content is showing here'
    },
    {
      nombre : 'Tab2',
      content :'Tab 2 content is showing here'
    },
    {
      nombre : 'Tab3',
      content :'Tab 3 content is showing here'
    },
    {
      nombre : 'Tab4',
      content :'Tab 4 content is showing here'
    }
  ];

  const [contenido,setContenido] = useState(datos[0].content);

  const cambiarTab = (contenido) => {
    setContenido(contenido);
  }

  return (
    <div className="App">
      <Tabs datos={datos} cambiarTab={cambiarTab}/>
      <ContenidoTab contenido={contenido}/>
    </div>
  );
}

export default App;
