import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
function App() {
    const [pacientes, setPacientes] = useState([]);

    return (
        <>
            <Header />
            <Formulario setPacientes={setPacientes} />
            <ListadoPacientes pacientes={pacientes} />
        </>
    );
}

export default App;
