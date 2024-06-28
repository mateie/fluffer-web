import { Avatar } from "primereact/avatar";
import SidebarPosts from "./posts/SidebarPosts";
import SidebarServers from "./servers/SidebarServers";
import { Tooltip } from "primereact/tooltip";

const Sidebar = ({
    pageType,
    navTo
}: {
    pageType: "posts" | "servers";
    navTo: Function;
}) => {
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
