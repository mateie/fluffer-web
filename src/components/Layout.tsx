import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import { useAuth } from "../hooks";
import { useEffect } from "react";
import SearchBar from "./SearchBar";

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
        if (
            isLoggedIn &&
            (location.pathname === "/login" || location.pathname === "/sign-up")
        )
            navigate("/servers");

        if (isLoggedIn && location.pathname === "/") navigate("/servers");
    }, [isLoggedIn, location.pathname]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <div className="flex justify-center p-8">
                    <SearchBar />
                </div>
                <div className="flex flex-col items-center h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
