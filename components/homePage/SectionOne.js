import React from "react";
import H2 from "../H2";
import CardTeam from "../Card";

const SectionTeam = () => {
	return (
		<div className='container py-28'>
			<div className=''>
				<H2 title='Notre équipe' />
				<p className='text-xl text-center pt-3'>
					Une équipe de professionnelles qualifiées
				</p>
			</div>
			<div className='md:flex md:justify-center md:space-x-10 md:px-14 '>
				<CardTeam
					name='Tia Durand'
					description='	Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id
						nibh tortor id.'
				/>
				<CardTeam
					name='Naomie Debout'
					description='	Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id
						nibh tortor id.'
				/>
				<CardTeam
					name='Rose Dupont'
					description='	Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id
						nibh tortor id.'
				/>
			</div>
		</div>
	);
};

export default SectionTeam;
