import { Avatar } from "primereact/avatar";
import { useAuth } from "../hooks";

export const ProfileMenu = () => {
    const { user } = useAuth();

    if (!user) return <></>;

    return (
        <Avatar
            label={user.username[0].toUpperCase()}
            image={user.avatar ?? undefined}
            shape="circle"
            size="xlarge"
            className="h-16 w-16"
        />
    );
};

export default ProfileMenu;
