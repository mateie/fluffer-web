import { ButtonProps } from "primereact/button";

declare type LoginCredentials = {
    usernameOrEmail: string;
    password: string;
};

declare type SignupCredentials = {
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
};

declare type LoginErrors = {
    notFound?: string | null;
    username?: string | null;
    email?: string | null;
    password?: string | null;
};

declare type SignupErrors = {
    email?: string | null;
    password?: string | null;
    username?: string | null;
    confirmPassword?: string | null;
};

declare type AuthContextType = {
    user?: User | null;
    isLoggedIn: boolean;
    login: (userData: any) => void;
    logout: () => void;
};

declare type User = {
    id: string;
    username: string;
    email: string;
    globalName?: string | null;
    avatar?: string | null;
    avatarUrl?: string | null;
    bio?: string | null;
    createdAt: string;
    createdTimestamp: number;
    updatedAt: string;
    updatedTimestamp: number;
};

declare type UserWithToken = User & {
    token: string;
};

declare type SidebarServersButtonProps = ButtonProps & {
    server?: Server;
};

declare type SidebarPostsButtonProps = ButtonProps & {
    user?: User;
};

declare type Server = {
    id: string;
    name: string;
    nameAcronym: string;
    icon?: string;
    iconUrl?: string;
};
