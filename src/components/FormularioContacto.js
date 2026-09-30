import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function FormularioContacto() {
	// Configuración de React Hook Form para las validaciones
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	// Referencia al formulario para EmailJS
	const form = useRef();

	// Función que se ejecuta cuando el formulario es válido y se envía
	const onSubmit = (data) => {
		// a través de EmailJS pedimos que se envíe el formulario a nuestro correo electrónico
		emailjs
			.sendForm('service_e1xgfyf', 'template_dvzy2la', form.current, 'Sj6WFRd97po7EJk7K')
			.then(() => {
				alert('¡Mensaje enviado con éxito a tu correo!');
				reset();
			})
			.catch((error) => {
				alert('Hubo un error al enviar el mensaje: ' + error.text);
			});
	};

	return (
		<form ref={form} onSubmit={handleSubmit(onSubmit)} className="formulario-estilizado">
			{/* Campo: Nombre y Apellido */}
			<div className="grupo-input">
				<label>Nombre y Apellido:</label>
				<input
					type="text"
					name="user_name"
					{...register('user_name', {
						required: 'El nombre y apellido son obligatorios',
						minLength: {
							value: 5,
							message: 'Debe tener al menos 5 caracteres',
						},
					})}
					placeholder="Ej: Juan Pérez"
				/>
				{errors.user_name && (
					<span className="mensaje-error">{errors.user_name.message}</span>
				)}
			</div>

			{/* Campo: Correo Electrónico */}
			<div className="grupo-input">
				<label>Correo Electrónico:</label>
				<input
					type="email"
					name="user_email"
					{...register('user_email', {
						required: 'El correo electrónico es obligatorio',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'El formato del correo no es válido',
						},
					})}
					placeholder="Ej: juan@gmail.com"
				/>
				{errors.user_email && (
					<span className="mensaje-error">{errors.user_email.message}</span>
				)}
			</div>

			{/* Campo: Mensaje */}
			<div className="grupo-input">
				<label>Mensaje (Máximo 300 caracteres):</label>
				<textarea
					name="message"
					maxLength={300}
					{...register('message', {
						required: 'Por favor, escribe un mensaje',
						maxLength: {
							value: 300,
							message: 'El mensaje no puede superar los 300 caracteres',
						},
					})}
					placeholder="Escribe tu consulta aquí..."
					rows="5"
				></textarea>
				{errors.message && (
					<span className="mensaje-error">{errors.message.message}</span>
				)}
			</div>

			<button type="submit" className="btn-enviar">
				Enviar Mensaje
			</button>
		</form>
	);
}

export default FormularioContacto;