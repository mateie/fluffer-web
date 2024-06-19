import { useEffect } from "react";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const HomePage = () => {
    const navigate = useNavigate();

    const { isLoggedIn, logout } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
    }, [isLoggedIn]);

    return (
        <>
            <Button onClick={() => logout()} label="Logout" />
        </>
    );
};

export default HomePage;
