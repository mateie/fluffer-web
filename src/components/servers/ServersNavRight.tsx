import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const ServersNavRight = () => {
    return (
        <Link to="/posts" className="font-semibold">
            <Button label="Posts" outlined severity="danger" />
        </Link>
    );
};

export default ServersNavRight;
