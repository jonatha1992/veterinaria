import React from "react";
import Paciente from "./Paciente";
const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2  lg:w-4/5 ">
            <h1 className="text-gray-800 font-black text-2xl text-center">Listado Pacientes</h1>
            <p
                className="text-indigo-600
             font-bold text-1xl mt-1 text-center"
            >
                Administracion
            </p>
            <div className="conteiner w-full mt-5 md:h-screen overflow-y-scroll ">
                <Paciente />
                <Paciente />
                <Paciente />
            </div>
        </div>
    );
};

export default ListadoPacientes;
