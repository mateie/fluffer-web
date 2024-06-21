import { Avatar } from "primereact/avatar";
import { useAuth } from "../hooks";

export const AvatarButton = () => {
    const { user } = useAuth();

    if (!user) return <></>;

    return (
        <Avatar
            label={user.username[0].toUpperCase()}
            image={user.avatar || undefined}
            className="cursor-pointer border"
            shape="circle"
            size="xlarge"
        />
    );
};

export default AvatarButton;
