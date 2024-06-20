import { Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Signup } from "./pages";

const App = () => {
    return (
        <div className="block">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
