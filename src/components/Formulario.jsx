import React from "react";
import Alerta from "./Alerta";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Formulario = () => {
	const navigate = useNavigate();
	const nuevoClienteSchema = Yup.object().shape({
		nombre: Yup.string()
			.min(3, "El Nombre es muy corto")
			.max(20, "El Nombre es muy largo")
			.required("El nombre del Cliente es Obligatorio"),
		empresa: Yup.string().required(
			"El nombre de la Empresa es Obligatorio",
		),
		email: Yup.string()
			.email("Email no válido")
			.required("El Email es Obligatorio"),
		telefono: Yup.number()
			.positive("Número no válido")
			.integer("Número no válido")
			.typeError("Número no válido"),
		notas: "",
	});

	const handleSubmit = async (datos) => {
		try {
			const url = "http://localhost:3000/clientes";
			const respuesta = await fetch(url, {
				method: "POST",
				body: JSON.stringify(datos),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const resultado = await respuesta.json();
			console.log(resultado);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
			<h1 className="text-gray-600 font-bold text-xl uppercase text-center">
				Agregar cliente
			</h1>
			<Formik
				initialValues={{
					nombre: "",
					empresa: "",
					telefono: "",
					email: "",
					notas: "",
				}}
				onSubmit={async (val, { resetForm }) => {
					await handleSubmit(val);
					resetForm();
					navigate("/clientes");
				}}
				validationSchema={nuevoClienteSchema}
			>
				{({ errors, touched }) => {
					return (
						<Form className="mt-10">
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="nombre"
								>
									Nombre:{" "}
								</label>
								<Field
									id="nombre"
									type="text"
									className="block mt-2 w-full p-3 bg-gray-50"
									placeholder="Nombre del Cliente"
									name="nombre"
								/>
								{errors.nombre && touched.nombre ? (
									<Alerta>{errors.nombre}</Alerta>
								) : null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="empresa"
								>
									Empresa:{" "}
								</label>
								<Field
									id="empresa"
									type="text"
									className="block mt-2 w-full p-3 bg-gray-50"
									placeholder="Empresa del Cliente"
									name="empresa"
								/>
								{errors.empresa && touched.empresa ? (
									<Alerta>{errors.empresa}</Alerta>
								) : null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="email"
								>
									Email:{" "}
								</label>
								<Field
									id="email"
									type="email"
									className="block mt-2 w-full p-3 bg-gray-50"
									placeholder="Email"
									name="email"
								/>
								{errors.email && touched.email ? (
									<Alerta>{errors.email}</Alerta>
								) : null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="telefono"
								>
									Teléfono:{" "}
								</label>
								<Field
									id="telefono"
									type="tel"
									className="block mt-2 w-full p-3 bg-gray-50"
									placeholder="Teléfono del Cliente"
									name="telefono"
								/>
								{errors.telefono && touched.telefono ? (
									<Alerta>{errors.telefono}</Alerta>
								) : null}
							</div>
							<div className="mb-4">
								<label
									className="text-gray-800"
									htmlFor="notas"
								>
									Notas:{" "}
								</label>
								<Field
									as="textarea"
									id="notas"
									type="text"
									className="block mt-2 w-full p-3 bg-gray-50 h-40"
									placeholder="Notas del Cliente"
									name="notas"
								/>
							</div>
							<input
								type="submit"
								value="Agregar Cliente"
								className="mt-5 w-full bg-blue-800 p-3 text-white font-bold uppercase text-lg"
							/>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default Formulario;
