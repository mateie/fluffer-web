import { useLocation } from "react-router-dom";
import { PostsNavRight, ServersNavRight } from "./NavItems";
import AvatarButton from "./AvatarButton";

const Navigation = () => {
    const location = useLocation();

    return (
        <div className="flex justify-between items-center mx-4 p-6 max-ol-5">
            <div className="flex items-center">
                <div className="text-2xl font-bold">Logo</div>
            </div>
            <div className="flex items-center gap-2">
                {/* Search field if posts  */}
            </div>
            <div className="flex items-center">
                <div className="flex items-center mr-10">
                    {location.pathname === "/servers" && <ServersNavRight />}
                    {location.pathname === "/posts" && <PostsNavRight />}
                </div>
                <div className="mx-4">
                    <AvatarButton />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
