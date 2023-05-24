import React, { useState, useEffect } from "react";

const ErrorBoundary = (props) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleErrors = (error, info) => {
            setHasError(true);
        };

        window.addEventListener("error", handleErrors);

        return () => {
            window.removeEventListener("error", handleErrors);
        };
    }, []);

    return hasError ? <h1>Ooops. That is not good</h1> : props.children;
};

export default ErrorBoundary;
