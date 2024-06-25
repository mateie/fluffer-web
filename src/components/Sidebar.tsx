import { useLocation, useNavigate } from "react-router-dom";

import ProfileMenu from "./ProfileMenu";
import { useEffect, useState } from "react";
import { Avatar } from "primereact/avatar";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageType, setPageType] = useState<"posts" | "servers">("posts");

    console.log(pageType);

    useEffect(() => {
        if (location.pathname === "/servers") setPageType("servers");
        if (location.pathname === "/posts") setPageType("posts");
    }, [location.pathname, pageType]);

    // TODO: Finish the sidebar

    return (
        <div className="flex flex-col h-screen justify-between items-center mx-4 p-4 max-ol-5 shadow-2xl bg-neutral-700/[.2]  rounded-full">
            <div className="flex items-center">
                {pageType === "posts" ? (
                    <Avatar
                        shape="circle"
                        label="Posts"
                        className="w-16 h-16 border-2 border-blue-500"
                        onClick={() => navigate("servers")}
                    />
                ) : (
                    <Avatar
                        shape="circle"
                        label="Servers"
                        className="w-16 h-16 border-2 border-green-500"
                        onClick={() => navigate("posts")}
                    />
                )}
            </div>
            <div className="flex items-center">{/* Search field */}</div>
            <div className="flex items-center">
                <ProfileMenu />
            </div>
        </div>
    );
};

export default Sidebar;
