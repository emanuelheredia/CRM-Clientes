import React from "react";
import { useNavigate } from "react-router-dom";

const Clientes = ({ cliente, handleEliminar }) => {
	const navigate = useNavigate();
	const { nombre, empresa, telefono, email, notas, id } = cliente;
	return (
		<tr className="border-b hover:bg-gray-50">
			<th className="p-3"> {nombre}</th>
			<th className="p-3">
				<p>
					<span className="text-gray-800 uppercase font-bold">
						Email:{" "}
					</span>
					{email}
				</p>
				<p>
					<span className="text-gray-800 uppercase font-bold">
						Teléfono:{" "}
					</span>
					{telefono}
				</p>
			</th>
			<th className="p-3"> {empresa}</th>
			<th className="p-3">
				<button
					className="bg-yellow-500 hover:bg-yellow-600 text-white uppercase block w-full p-2 font-bold text-xs"
					type="button"
					onClick={() => {
						navigate(`/clientes/${id}`);
					}}
				>
					Ver
				</button>
				<button
					className="bg-blue-600 hover:bg-blue-700 text-white uppercase block w-full p-2 font-bold text-xs mt-3"
					type="button"
					onClick={() => {
						navigate(`/clientes/editar/${id}`);
					}}
				>
					Editar
				</button>
				<button
					className="bg-red-600 hover:bg-red-700 text-white uppercase block w-full p-2 font-bold text-xs mt-3"
					type="button"
					onClick={() => handleEliminar(id)}
				>
					Eliminar
				</button>
			</th>
		</tr>
	);
};

export default Clientes;
