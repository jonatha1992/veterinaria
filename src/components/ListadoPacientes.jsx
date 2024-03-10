import { usePacientes } from "../context/Context";
import Paciente from "./Paciente";
const ListadoPacientes = () => {
    const { pacientes, setPacientes } = usePacientes();
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
                {pacientes.length === 0 ? (
                    <p className="text-center">No hay pacientes registrados.</p>
                ) : (
                    pacientes.map((paciente) => <Paciente paciente={paciente} key={paciente.id} />)
                )}
            </div>
        </div>
    );
};

export default ListadoPacientes;
