import HomePage from "./HomePage";
import OnyxPage from "./OnyxPage";
import GarnetPage from "./GarnetPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/onyx" element={<OnyxPage />} />
                <Route path="/garnet" element={<GarnetPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
