import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
function App() {
    const [pacientes, setPacientes] = useState([]);

    return (
        <div className="container mx-auto  min-h-screen overflow-hidden ">
            <Header />
            <Formulario setPacientes={setPacientes} />
            <ListadoPacientes pacientes={pacientes} />
        </>
    );
}

export default App;
