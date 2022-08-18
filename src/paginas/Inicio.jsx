import { useEffect, useState } from "react";
import Clientes from "../components/Clientes";

const Inicio = () => {
	const [clientes, setClientes] = useState([]);
	useEffect(() => {
		try {
			const obtenerClientesAPI = async () => {
				const url = "http://localhost:3000/clientes";
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				setClientes(resultado);
			};
			obtenerClientesAPI();
		} catch (error) {
			console.log(error);
		}
	}, []);
	const handleEliminar = async (id) => {
		const confirmacion = confirm("¿Deseas eliminar este ciente?");
		if (confirmacion) {
			try {
				const url = `http://localhost:3000/clientes/${id}`;
				const respuesta = await fetch(url, {
					method: "DELETE",
				});
				await respuesta.json();
				const clientesActualizado = clientes.filter(
					(cliente) => cliente.id !== id,
				);
				setClientes(clientesActualizado);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<>
			<h1 className="text-4xl text-blue-900 font-black">Clientes</h1>
			<p className="mt-3">Administra tus clientes</p>
			<table className="w-full mt-5 table-auto shadow bg-white">
				<thead className="bg-blue-800 text-white">
					<tr>
						<th className="p-2">Nombre</th>
						<th className="p-2">Contacto</th>
						<th className="p-2">Empresa</th>
						<th className="p-2">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{clientes.map((cliente) => (
						<Clientes
							key={cliente.id}
							cliente={cliente}
							handleEliminar={handleEliminar}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Inicio;
