import { Children } from "react";
import { useContext, useState, createContext } from "react";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({
        id: "",
        nombre: "",
        propietario: "",
        email: "",
        fecha: "",
        sintomas: "",
    });

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
