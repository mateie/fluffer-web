import { Avatar } from "primereact/avatar";
import { useAuth } from "../hooks";
import { MenuItem } from "primereact/menuitem";
import { BiLogOutCircle } from "react-icons/bi";
import { Tooltip } from "primereact/tooltip";
import { SpeedDial } from "primereact/speeddial";

export const ProfileMenu = () => {
    const { user, logout } = useAuth();

    if (!user) return <></>;

    const items: MenuItem[] = [
        {
            label: "Logout",
            icon: <BiLogOutCircle size="1.5rem" color="red" />,
            command: () => logout()
        }
    ];

    return (
        <>
            <Tooltip
                target=".user-profile-menu .p-speeddial-action"
                position="left"
            />
            <SpeedDial
                model={items}
                radius={90}
                className="user-profile-menu"
                style={{ right: "0.7rem", top: "0.7rem" }}
                buttonTemplate={({ onClick }) => (
                    <Avatar
                        label={user.username[0].toUpperCase()}
                        image={user.avatar || undefined}
                        className="cursor-pointer w-16 h-16"
                        shape="circle"
                        size="xlarge"
                        onClick={onClick}
                    />
                )}
                type="linear"
                direction="down"
            />
        </>
    );
};

export default ProfileMenu;
