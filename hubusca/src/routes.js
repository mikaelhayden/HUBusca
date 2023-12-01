import Inicio from "pages/Inicio";
import Perfil from "pages/Perfil";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}> </Route>
                <Route path="/Perfil" element={<Perfil />}> </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes;