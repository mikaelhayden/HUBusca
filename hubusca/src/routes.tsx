import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, Historic} from "./pages";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/profile" element={<Profile />}> </Route>
                <Route path="/historic" element={<Historic />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}