import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Avatar } from "primereact/avatar";
import SidebarPosts from "./posts/SidebarPosts";
import SidebarServers from "./servers/SidebarServers";
import { Tooltip } from "primereact/tooltip";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageType, setPageType] = useState<"posts" | "servers">("servers");

    useEffect(() => {
        if (location.pathname === "/servers") setPageType("servers");
        if (location.pathname === "/posts") setPageType("posts");
    }, [location.pathname, pageType]);

    // TODO: Finish the sidebar, Move profile menu to the toolbar instead

    const navTo = (type: "posts" | "servers") => {
        if (type === "posts") {
            setPageType("posts");
            navigate("/posts");
        } else {
            setPageType("servers");
            navigate("/servers");
        }
    };

    console.log(pageType);
    return (
        <>
            <Tooltip
                target=".switch-between"
                content={`Switch to ${
                    pageType === "posts" ? "Servers" : "Posts"
                }`}
                position="right"
            />
            <div className="flex flex-col h-screen justify-between items-center">
                <div className="pb-2">
                    {pageType === "posts" ? (
                        <>
                            <Avatar
                                shape="circle"
                                label="Posts"
                                className="switch-between w-16 h-16 border-2 border-blue-500"
                                onClick={() => navTo("servers")}
                            />
                        </>
                    ) : (
                        <Avatar
                            shape="circle"
                            label="Servers"
                            className="switch-between w-16 h-16 border-2 border-green-500"
                            onClick={() => navTo("posts")}
                        />
                    )}
                </div>
                {pageType === "posts" ? <SidebarPosts /> : <SidebarServers />}
            </div>
        </>
    );
};

export default Sidebar;
