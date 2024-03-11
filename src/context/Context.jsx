import { useContext, useState, createContext, useEffect } from "react";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState(() => {
        const pacientesLS = localStorage.getItem("pacientes");
        console.log("Inicializando pacientes con datos de localStorage:", pacientesLS);
        return pacientesLS ? JSON.parse(pacientesLS) : [];
    });

    const [paciente, setPaciente] = useState({
        id: "",
        nombre: "",
        propietario: "",
        email: "",
        fecha: "",
        sintomas: "",
    });

    // Este useEffect ahora sólo maneja la actualización del localStorage cuando 'pacientes' cambia
    useEffect(() => {
        console.log("Actualizando localStorage con nuevos datos de pacientes:", pacientes);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
        setPacientes(pacientesActualizados);
    };

    return (
        <PacientesContext.Provider value={{ pacientes, setPacientes, paciente, setPaciente, eliminarPaciente }}>
            {children}
        </PacientesContext.Provider>
    );
};

export const usePacientes = () => useContext(PacientesContext);
