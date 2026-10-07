import { useContext, useState, createContext, useEffect } from "react";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState(() => {
        try {
            const pacientesLS = localStorage.getItem("pacientes");
            if (!pacientesLS) return [];
            const parsed = JSON.parse(pacientesLS);
            return Array.isArray(parsed) ? parsed : [];
        } catch (err) {
            console.error("Error al cargar pacientes de localStorage:", err);
            return [];
        }
    });

    const [paciente, setPaciente] = useState({
        id: "",
        nombre: "",
        propietario: "",
        email: "",
        fecha: "",
        sintomas: "",
    });

    // Actualizar localStorage cuando 'pacientes' cambia
    useEffect(() => {
        try {
            localStorage.setItem("pacientes", JSON.stringify(pacientes));
        } catch (err) {
            console.error("Error al persistir pacientes en localStorage:", err);
        }
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
