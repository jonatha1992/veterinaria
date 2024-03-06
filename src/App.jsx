import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    return (
        <>
            <Header />
            <Formulario />
            <ListadoPacientes />
        </>
    );
}

export default App;
