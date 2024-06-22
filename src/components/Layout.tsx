import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navigation from "./navigation/Navigation";

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === "/") navigate("/posts");

    return (
        <div className="h-screen">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;
