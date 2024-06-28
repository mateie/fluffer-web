import { Toolbar as PToolbar } from "primereact/toolbar";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

const Toolbar = ({ pageType }: { pageType: "posts" | "servers" }) => {
    const logo = (
        <img
            src="https://i.redd.it/x36jz0skm9z61.png"
            className="w-10 h-10 rounded-full"
        />
    );

    return (
        <PToolbar
            start={logo}
            center={<SearchBar />}
            end={<ProfileMenu />}
            className={`w-full shadow-2xl bg-neutral-700/[.2] ${
                pageType === "posts"
                    ? "border-b-2 border-b-blue-500"
                    : "border-b-2 border-b-green-500"
            }`}
        />
    );
};

export default Toolbar;
