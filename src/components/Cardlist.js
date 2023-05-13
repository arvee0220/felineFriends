import React from "react";
import Card from "./Card";

const Cardlist = ({felines}) => {
	return (
		<div>
			{
				felines.map((user, i) => {
					return (<Card
						key={i}
						id={felines[i].id}
						name={felines[i].name}
						email={felines[i].email}
					/>
					);
				})
			}
		</div>
	)
};

export default Cardlist;