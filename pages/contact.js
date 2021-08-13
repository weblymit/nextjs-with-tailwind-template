import ContactComponent from "../components/ContactForm";
import Navbar from "../components/Navbar";

const contact = () => {
	return (
		<>
			<div className='bg-gray-100'>
				<Navbar />
			</div>
			<div className='pt-16 pb-24 '>
				<div className='container'>
					<div className=' pb-6 text-center'>
						<h2 className='text-4xl md:text-6xl	font-semibold pb-5'>
							Nous contacter
						</h2>
						<p className='text-center lg:max-w-md lg:mx-auto lg:text-xl font-extralight'>
							Prenez quelques instant pour nous contacter pour plus
							d'information.
						</p>
					</div>
					<div className='md:max-w-lg mx-auto'>
						<ContactComponent />
					</div>
				</div>
			</div>
		</>
	);
};

export default contact;
