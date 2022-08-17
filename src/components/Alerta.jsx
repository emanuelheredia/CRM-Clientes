import React from "react";

const Alerta = ({ children }) => {
	return (
		<div className="text-center text-white uppercase font-bold p-3 bg-red-600">
			{children}
		</div>
	);
};

export default Alerta;
