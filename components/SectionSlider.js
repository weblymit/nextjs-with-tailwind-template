import React from "react";
import SlideHome from "./SlideHome";

function SectionNews({ slideImg }) {
	return (
		<section className='lg:px-64 py-8 rounded-xl '>
			<SlideHome slideImg={slideImg} />
		</section>
	);
}

export default SectionNews;
