import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { PacientesProvider } from "./context/Context";

function App() {
    return (
        <PacientesProvider>
            <div className="container mx-auto  min-h-screen overflow-hidden ">
                <Header />
                <div className="md:flex mt-4">
                    <Formulario />
                    <ListadoPacientes />
                </div>
            </div>
        </PacientesProvider>
    );
}

export default App;
