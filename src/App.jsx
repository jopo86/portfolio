import HomePage from "./HomePage";
import OnyxPage from "./OnyxPage";
import GarnetPage from "./GarnetPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
    const [geekMode, setGeekMode] = useState(true);

    return (
        <AppContext.Provider value={{ geekMode, setGeekMode }}>
            <BrowserRouter basename="/portfolio">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/onyx" element={<OnyxPage />} />
                    <Route path="/garnet" element={<GarnetPage />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
