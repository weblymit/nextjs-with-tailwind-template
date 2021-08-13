import React from 'react';

function H2({title}) {
	return (
		<div className='pb-8'>
			<h2 className='font-extrabold text-2xl lg:text-5xl pb-3'>
			{title}
			</h2>
			<div className='flex items-center'>
				<div className='bg-access-orange-light h-1 w-20' />
				<div className='bg-access-primary-light h-1 w-12 ml-1' />
				<div className='bg-access-primary-default h-1 w-8 ml-1' />
			</div>
		</div>
	);
}

export default H2;
