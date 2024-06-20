import { Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Signup } from "./pages";
import { useQuery } from "@apollo/client";
import { PulseCheck } from "./gql/general";
import { ErrorMessage } from "./components";

const App = () => {
    const { data: { pulse } = {} } = useQuery(PulseCheck);

    if (!pulse)
        return (
            <ErrorMessage
                message="😢 Server is down 😢"
                subtext={[
                    "Please try again later.",
                    "We apologize for the inconvenience.",
                    "You can also contact developers for more information."
                ]}
            />
        );

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
