import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Clientes from "../components/Clientes";
import Spinner from "../components/Spinner";

const VerCliente = () => {
	const { id } = useParams();
	const [cliente, setCliente] = useState({});
	const [cargando, setCargando] = useState(false);
	useEffect(() => {
		setCargando(!cargando);
		const obtenerCLiente = async () => {
			try {
				const url = `${import.meta.env.VITE_API_URL}/${id}`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				setCliente(resultado);
			} catch (error) {
				console.log(error);
			}
			setCargando(false);
		};
		obtenerCLiente();
	}, []);

	return cargando ? (
		<Spinner />
	) : Object.keys(cliente).length === 0 ? (
		<p>No hay Resultados</p>
	) : (
		<div>
			<>
				<h1 className="text-4xl text-blue-900 font-black">
					Ver Cliente: {cliente.nombre}
				</h1>
				<p className="mt-3">Información del Cliente</p>

				<p className="text-4xl text-gray-600 mt-10 ">
					<span className=" uppercase text-gray-800 font-bold">
						Cliente:{" "}
					</span>
					{cliente.nombre}
				</p>
				<p className="text-2xl text-gray-600 mt-4">
					<span className=" uppercase text-gray-800 font-bold">
						Email:{" "}
					</span>
					{cliente.email}
				</p>
				{Clientes.telefono && (
					<p className="text-2xl text-gray-600 mt-4">
						<span className=" uppercase text-gray-800 font-bold">
							Telefono:{" "}
						</span>
						{cliente.telefono}
					</p>
				)}
				<p className="text-2xl text-gray-600 mt-4">
					<span className=" uppercase text-gray-800 font-bold">
						Empresa:{" "}
					</span>
					{cliente.empresa}
				</p>
				{cliente.notas && (
					<p className="text-2xl text-gray-600 mt-4">
						<span className=" uppercase text-gray-800 font-bold">
							Notas:{" "}
						</span>
						{cliente.notas}
					</p>
				)}
			</>
		</div>
	);
};

export default VerCliente;
