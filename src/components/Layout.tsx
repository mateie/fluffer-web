import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
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
            navigate("/posts");

        if (isLoggedIn && location.pathname === "/") navigate("/posts");
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
