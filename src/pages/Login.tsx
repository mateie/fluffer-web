import { useEffect, useState } from "react";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LoginUser } from "../gql/auth";

import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

const LoginPage = () => {
    const navigate = useNavigate();

    const { isLoggedIn, login } = useAuth();

    useEffect(() => {
        if (isLoggedIn) navigate("/");
    }, [isLoggedIn]);

    const [creds, setCreds] = useState<LoginCredentials>({
        usernameOrEmail: "",
        password: ""
    });

    const [errors, setErrors] = useState<LoginErrors>({
        notFound: null,
        username: null,
        email: null,
        password: null
    });

    const [loginUser] = useMutation(LoginUser, {
        update: (_, { data: { loginUser: userData } = {} }) => {
            setErrors({
                notFound: null,
                email: null,
                password: null,
                username: null
            });

            setCreds({ usernameOrEmail: "", password: "" });

            login(JSON.stringify(userData));

            navigate("/");
        },
        onError: (error) => {
            // TODO: Come up with a better way to handle errors.
            const { message } = error;
            if (message.toLowerCase().includes("email")) {
                setErrors({
                    notFound: null,
                    email: message,
                    username: null,
                    password: null
                });
            }

            if (message.toLowerCase().includes("username")) {
                setErrors({
                    notFound: null,
                    email: null,
                    username: message,
                    password: null
                });
            }

            if (message.toLowerCase().includes("password")) {
                setErrors({
                    notFound: null,
                    username: null,
                    email: null,
                    password: message
                });
            }

            if (message.toLowerCase().includes("not found")) {
                setErrors({
                    notFound: message,
                    email: null,
                    username: null,
                    password: null
                });
            }
        },
        variables: creds
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    };

    if (isLoggedIn) return <></>;

    return (
        <div className="flex container h-screen m-auto">
            <div className="flex flex-col p-10 justify-center items-center gap-10 m-auto shadow-2xl bg-gradient-to-r from-purple-950 rounded-lg">
                <div className="header p-2">
                    <span className="text-lg">Login to&nbsp;</span>
                    <span className="text-lg font-bold">Fluffer</span>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <FloatLabel>
                        <InputText
                            id="usernameOrEmail"
                            name="usernameOrEmail"
                            onChange={onChange}
                            value={creds.usernameOrEmail}
                        />
                        <label htmlFor="usernameOrEmail">Username/Email</label>
                    </FloatLabel>
                    <span className="text-red-500 text-sm">
                        {errors.username || errors.email || errors.notFound}
                    </span>
                    <FloatLabel>
                        <Password
                            id="password"
                            name="password"
                            type="password"
                            onChange={onChange}
                            value={creds.password}
                            toggleMask
                            size={18}
                        />
                        <label htmlFor="password">Password</label>
                    </FloatLabel>
                    {errors.password && (
                        <span className="text-red-500 text-sm">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div className="footer">
                    <Button
                        label="Submit"
                        onClick={() => loginUser()}
                        className="w-full"
                        severity="success"
                    />
                    <p className="text-sm text-center mt-5">
                        Don't have an account?{" "}
                        <p
                            className="text-blue-400 m-2 cursor-pointer"
                            onClick={() => navigate("/sign-up")}
                        >
                            Sign up
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
