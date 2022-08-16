import React from "react";
import { Formik, Form, Field } from "formik";

const Formulario = () => {
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
				onSubmit={(val) => {
					console.log(val);
				}}
			>
				{() => (
					<Form className="mt-10">
						<div className="mb-4">
							<label className="text-gray-800" htmlFor="nombre">
								Nombre:{" "}
							</label>
							<Field
								id="nombre"
								type="text"
								className="block mt-2 w-full p-3 bg-gray-50"
								placeholder="Nombre del Cliente"
								name="nombre"
							/>
						</div>
						<div className="mb-4">
							<label className="text-gray-800" htmlFor="empresa">
								Empresa:{" "}
							</label>
							<Field
								id="empresa"
								type="text"
								className="block mt-2 w-full p-3 bg-gray-50"
								placeholder="Empresa del Cliente"
								name="empresa"
							/>
						</div>
						<div className="mb-4">
							<label className="text-gray-800" htmlFor="email">
								Email:{" "}
							</label>
							<Field
								id="email"
								type="email"
								className="block mt-2 w-full p-3 bg-gray-50"
								placeholder="Email"
								name="email"
							/>
						</div>
						<div className="mb-4">
							<label className="text-gray-800" htmlFor="telefono">
								Teléfono:{" "}
							</label>
							<Field
								id="telefono"
								type="tel"
								className="block mt-2 w-full p-3 bg-gray-50"
								placeholder="Teléfono del Cliente"
								name="telefono"
							/>
						</div>
						<div className="mb-4">
							<label className="text-gray-800" htmlFor="notas">
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
				)}
			</Formik>
		</div>
	);
};

export default Formulario;
