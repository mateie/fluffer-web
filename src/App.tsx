import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";

const App = () => {
    return (
        <div className="block">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
