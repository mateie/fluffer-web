import { PropsWithChildren, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/auth";

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoggedIn: false,
    login: (userData: any) => userData,
    logout: () => {}
});

export function AuthProvider(props: PropsWithChildren) {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);

    const loginUser = (userData: UserWithToken) => {
        localStorage.setItem("ff-token", userData.token);
        const { token: _, ...user } = userData;
        dispatch(login(user));
    };

    const logoutUser = () => {
        localStorage.removeItem("ff-token");
        dispatch(logout());
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn: !!user,
                login: loginUser,
                logout: logoutUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
