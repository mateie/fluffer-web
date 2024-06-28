import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import { useAuth } from "../hooks";
import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [pageType, setPageType] = useState<"posts" | "servers">("servers");

    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
        if (
            isLoggedIn &&
            (location.pathname === "/login" || location.pathname === "/sign-up")
        )
            navigate("/servers");

        if (isLoggedIn && location.pathname === "/") navigate("/servers");
        if (location.pathname === "/servers") setPageType("servers");
        if (location.pathname === "/posts") setPageType("posts");
    }, [isLoggedIn, location.pathname, pageType]);

    const navTo = (type: "posts" | "servers") => {
        if (type === "posts") {
            setPageType("posts");
            navigate("/posts");
        } else {
            setPageType("servers");
            navigate("/servers");
        }
    };

    return (
        <div className="flex">
            <Sidebar pageType={pageType} navTo={navTo} />
            <div className="flex flex-col w-full">
                <div className="flex justify-center shadow-2xl w-full">
                    <Toolbar pageType={pageType} />
                </div>
                <div className="flex flex-col items-start p-8 h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
