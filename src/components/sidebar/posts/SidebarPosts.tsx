import { Avatar } from "primereact/avatar";
import SidebarPostsButton from "./SibebarPostsButton";

const SidebarPosts = () => {
    const mockData: any[] = [
        {
            id: "1",
            username: "mateie",
            globalName: "Stealth",
            avatar: "https://static-00.iconduck.com/assets.00/perspective-dice-random-icon-469x512-mm6xb9so.png",
            avatarUrl:
                "https://static-00.iconduck.com/assets.00/perspective-dice-random-icon-469x512-mm6xb9so.png"
        },
        {
            id: "2",
            username: "jeff",
            globalName: "Jeff Bezos",
            avatar: "https://static-00.iconduck.com/assets.00/perspective-dice-random-icon-469x512-mm6xb9so.png",
            avatarUrl:
                "https://static-00.iconduck.com/assets.00/perspective-dice-random-icon-469x512-mm6xb9so.png"
        },
        {
            id: "3",
            username: "lolee"
        }
    ];

    return (
        <div className="flex flex-col items-center flex-grow w-full shadow-2xl bg-neutral-700/[.2] rounded-2xl p-5 border-y-2 gap-3 border-blue-500">
            {mockData.map((user) => (
                <SidebarPostsButton user={user} />
            ))}
        </div>
    );
};

export default SidebarPosts;
