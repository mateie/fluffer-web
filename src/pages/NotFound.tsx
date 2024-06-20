import { ErrorMessage } from "../components";

const NotFound = () => {
    return (
        <ErrorMessage
            message="😢 404 Not Found 😢"
            subtext="The page you are looking for does not exist"
        />
    );
};

export default NotFound;
