import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const PostsNavRight = () => {
    return (
        <Link to="/servers" className="font-semibold">
            <Button label="Servers" outlined severity="success" />
        </Link>
    );
};

export default PostsNavRight;
