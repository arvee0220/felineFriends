import React, { useState } from "react";

const ErrorBoundry = (props) => {
	const [hasError, setHasError] = useState(false);

	const componentDidCatch = (error, info) => {
		setHasError(true);
	};

	return hasError ? 
			<h1>Ooops. That is not good</h1>
			:
			props.children

}

export default ErrorBoundry;