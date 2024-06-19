import { useEffect } from "react";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
    }, [isLoggedIn]);

    return <></>;
};

export default HomePage;
