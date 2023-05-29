import React, { useState, useEffect } from "react";

const ErrorBoundry = (props) => {
    const [hasError, setHasError] = useState(false);

    const { children } = props;

    useEffect(() => {
        const handleErrors = (error, info) => {
            setHasError(true);
        };

        window.addEventListener("error", handleErrors);

        return () => {
            window.removeEventListener("error", handleErrors);
        };
    }, []);

    return hasError ? <h1>Ooops. That is not good</h1> : children;
};

export default ErrorBoundry;
