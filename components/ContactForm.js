import React from "react";
import axios from "axios";
import * as qs from "query-string";

class ContactComponent extends React.Component {
	constructor(props) {
		super(props);
		this.domRef = React.createRef();
		this.state = { feedbackMsg: null };
	}

	handleSubmit(event) {
		// Do not submit form via HTTP, since we're doing that via XHR request.
		event.preventDefault();
		// Loop through this component's refs (the fields) and add them to the
		// formData object. What we're left with is an object of key-value pairs
		// that represent the form data we want to send to Netlify.
		const formData = {};
		Object.keys(this.refs).map((key) => (formData[key] = this.refs[key].value));

		// Set options for axios. The URL we're submitting to
		// (this.props.location.pathname) is the current page.
		const axiosOptions = {
			// url: this.props.location.pathname,
			url: "/contact",
			method: "post",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			data: qs.stringify(formData),
		};

		// Submit to Netlify. Upon success, set the feedback message and clear all
		// the fields within the form. Upon failure, keep the fields as they are,
		// but set the feedback message to show the error state.
		axios(axiosOptions)
			.then((response) => {
				this.setState({
					feedbackMsg: "Votre message a bien été envoyé. Merci",
				});
				this.domRef.current.reset();
			})
			.catch((err) =>
				this.setState({
					feedbackMsg: "Votre message n'a pass été envoyé! Veuillez réessayez",
				})
			);
	}

	render() {
		return (
			<div>
				<form
					ref={this.domRef}
					name='contact_us'
					method='POST'
					data-netlify='true'
					data-netlify-honeypot='bot-field'
					onSubmit={(event) => this.handleSubmit(event)}
				>
					<input
						ref='form-name'
						type='hidden'
						name='form-name'
						value='contact_us'
					/>
					<input type='hidden' name='bot-field' />
					<div className=''>
						{/* Prénom */}
						<div className=''>
							<label htmlFor='prenom' className='font-bold text-gray-600'>
								Prénom
								<span className='text-red-500'>*</span>
							</label>
							<input
								type='text'
								ref='prenom'
								name='prenom'
								id='first-name'
								className='mt-2 mb-4 p-3 w-full border rounded-lg'
								required
							/>
						</div>
						{/* Nom */}
						<div className=''>
							<label htmlFor='nom' className='font-bold text-gray-600'>
								Nom
								<span className='text-red-500'>*</span>
							</label>
							<input
								type='text'
								ref='nom'
								name='nom'
								id='name'
								className='mt-2 mb-4 p-3 w-full border rounded-lg'
								required
							/>
						</div>
						{/* Mail */}
						<div className=''>
							<label htmlFor='nom' className='font-bold text-gray-600'>
								Email
								<span className='text-red-500'>*</span>
							</label>
							<input
								type='email'
								ref='mail'
								name='email'
								id='email'
								className='mt-2 mb-4 p-3 w-full border rounded-lg'
								required
							/>
						</div>
						<div className=''>
							<label htmlFor='message' className='font-bold text-gray-600'>
								Votre message <span className='text-red-500'>*</span>
							</label>
							<textarea
								ref='message'
								name='message'
								id='message'
								rows='10'
								className='mt-2 mb-4 p-3 w-full border rounded-lg'
								required
							/>
						</div>
						{/* end div col-lg-12 for message */}
					</div>{" "}
					{/* end div.row */}
					<div className='flex items-center justify-center mx-auto max-w-md text-sm'>
						<input
							className='form-check-input'
							type='checkbox'
							id='gridCheck'
							required
						/>
						<p className='ml-3 ' htmlFor='gridCheck'>
							En soumettant ce formulaire, j’accepte que les information soit
							enregistré par <span className="uppercase">accès</span> afin d’être contacté.
						</p>
					</div>
					{this.state.feedbackMsg && (
						<div class='text-green-500' role='alert'>
							{this.state.feedbackMsg}
						</div>
					)}
					<div id='submitBtn' className='flex justify-center'>
						<input
							type='submit'
							className='p-2 w-full max-w-xs uppercase text-2xl mt-6 bg-access-orange-default text-gray-100 rounded-lg shadow-lg'
							value='Envoyer'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default ContactComponent;
