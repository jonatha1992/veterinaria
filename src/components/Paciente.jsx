import { usePacientes } from "../context/Context";

const Paciente = ({ paciente }) => {
    const { setPaciente, eliminarPaciente } = usePacientes();

    const handleEliminar = () => {
        eliminarPaciente(paciente.id);
    };

    return (
        <div className="mx-5 mt-2 mb-5 bg-white shadow-md px-5 py-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""} <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{""} <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:{""} <span className="font-normal normal-case">{paciente.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:{""} <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas:{""} <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>
            <div className="flex justify-between mt-2">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
