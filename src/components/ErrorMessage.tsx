const ErrorMessage = ({
    message,
    subtext
}: {
    message: string;
    subtext?: string;
}) => (
    <div className="flex container h-screen m-auto">
        <div className="flex flex-col justify-center m-auto items-center">
            <h2 className="text-2xl font-bold">{message}</h2>
            {subtext && <span className="text-lg">{subtext}</span>}
        </div>
    </div>
);

export default ErrorMessage;
