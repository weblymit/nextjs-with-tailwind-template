import React from "react";

function CardCarousel({ text, srcImg, name, childrenName }) {
	return (
		<div className='py-12'>
			<p>{text}</p>
			<div className='lg:max-w-xs mx-auto lg:pb-8 lg:pt-10'>
				<img
					src={srcImg}
					alt=''
					className='rounded-tl-[30px] rounded-tr-[120px] rounded-bl-[150px] rounded-br-[140px] lg:w-44 mx-auto'
				/>
				<h3 className='text-center pt-5 font-bold'>{name}</h3>
				<p className='text-sm text-center'>{childrenName}</p>
			</div>
		</div>
	);
}

export default CardCarousel;
