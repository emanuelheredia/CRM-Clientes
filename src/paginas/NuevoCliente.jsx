import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
	return (
		<>
			<h1 className="text-4xl text-blue-900 font-black">NuevoCliente</h1>
			<p className="mt-3">
				Llena los siguientes campos para registrar un nuevo cliente
			</p>
			<Formulario />
		</>
	);
};

export default NuevoCliente;
