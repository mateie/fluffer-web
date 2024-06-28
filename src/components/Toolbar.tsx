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
            pt={{
                root: {
                    style: {
                        padding: "3px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: 0
                    }
                }
            }}
            className={`w-full shadow-2xl bg-neutral-700/[.2] ${
                pageType === "posts"
                    ? "border-b border-b-blue-500 border-l border-l-blue-500"
                    : "border-b border-b-green-500 border-l border-l-green-500"
            }`}
        />
    );
};

export default Toolbar;
