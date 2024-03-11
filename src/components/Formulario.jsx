import React, { useState } from "react";
import Error from "./Error";
import { usePacientes } from "../context/Context";

const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
};

const Formulario = () => {
    const [error, setError] = useState(false);
    const { pacientes, setPacientes, paciente, setPaciente } = usePacientes();
    const { id, nombre, propietario, email, fecha, sintomas } = paciente;

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([paciente.nombre, paciente.propietario, paciente.email, paciente.sintomas].includes("")) {
            setError(true);
            return;
        }
        if (paciente.id) {
            const pacientesActualizados = pacientes.map((pacienteState) =>
                pacienteState.id === paciente.id ? paciente : pacienteState
            );
            setPacientes(pacientesActualizados);
        } else {
            paciente.id = generarId();
            setPacientes([...pacientes, paciente]);
        }

        setPaciente({
            id: "",
            nombre: "",
            propietario: "",
            email: "",
            fecha: "",
            sintomas: "",
        });
        setError(false);
    };

    return (
        <div className=" mt-2 px-5 pb-0 rounded-md  md:w-2/4  mx-5  ">
            <h1 className="text-gray-800 font-black text-2xl text-center">Formulario de Ingreso</h1>
            <p
                className="text-indigo-600
             font-bold text-1xl mt-1 text-center"
            >
                Añade Pacientes y Administralos
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg my-5 py-10 px-12  ">
                {error && (
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                )}
                <div className="mb-2">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold text-sm">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-gray-500  border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-sm"
                        value={nombre}
                        onChange={(e) => setPaciente({ ...paciente, nombre: e.target.value })}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold text-sm">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-gray-500  border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-sm"
                        value={propietario}
                        onChange={(e) => setPaciente({ ...paciente, propietario: e.target.value })}
                    />
                </div>
                <div className="mb-2">
                    {/* <label htmlFor="email" className="block text-gray-700 uppercase font-bold text-sm">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-gray-500  border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-sm"
                        value={email}
                        onChange={(e) => setPaciente({ ...paciente, email: e.target.value })}
                    /> */}

                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold text-sm">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-gray-500 border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-sm"
                        value={email}
                        onChange={(e) => setPaciente({ ...paciente, email: e.target.value })}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold text-sm">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-gray-500  border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-sm"
                        value={fecha}
                        onChange={(e) => setPaciente({ ...paciente, fecha: e.target.value })}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold text-sm">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-gray-500  border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-sm"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={(e) => setPaciente({ ...paciente, sintomas: e.target.value })}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors "
                    value={id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
