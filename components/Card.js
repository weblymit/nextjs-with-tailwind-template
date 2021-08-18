import React from "react";

const CardTeam = ({ name, description }) => {
	return (
		<div className='mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0'>
			<div className='w-sm'>
				<img
					className='w-64'
					src='https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg'
					alt=''
				/>
				<div className='mt-4 text-green-600 text-center'>
					<h1 className='text-xl font-bold'>{name}</h1>
					<p className='mt-4 text-gray-600'>{description}</p>
					<button className='mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200'>
						MORE
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardTeam;
