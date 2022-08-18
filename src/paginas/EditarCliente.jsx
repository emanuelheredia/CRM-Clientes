import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
	const { id } = useParams();
	const [cliente, setCliente] = useState({});
	const [cargando, setCargando] = useState(false);
	useEffect(() => {
		setCargando(!cargando);
		const obtenerCLiente = async () => {
			try {
				const url = `http://localhost:3000/clientes/${id}`;
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

	return (
		<>
			{" "}
			<h1 className="text-4xl text-blue-900 font-black">
				Editar Cliente
			</h1>
			<p className="mt-3">
				Utiliza este formulario para editar datos de un Cliente
			</p>
			{cliente?.nombre ? (
				<Formulario cliente={cliente} cargando={cargando} />
			) : (
				<p className="mt-5 text-red-600">Numero de Cliente no válido</p>
			)}
		</>
	);
};

export default EditarCliente;
