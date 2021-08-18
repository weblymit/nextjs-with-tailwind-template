import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
	Pagination,
	Navigation,
	EffectCoverflow,
} from "swiper/core";
import CardCarousel from "./CardCarousel";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Caroussel() {
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.02),
			rgba(0, 0, 0, 0.43)
		), url(/img1.jpeg)`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		// objectFit: 'cover'
	};
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				slidesPerView={"auto"}
				// spaceBetween={30}
				// navigation
				coverflowEffect={{
					rotate: 30,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				className='mySwiper'
			>
				<SwiperSlide className='pt-8  bg-[#faf8d5] px-10 text-lg rounded max-w-md'>
					<CardCarousel
						text='ffLorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
				inventore repellendus esse rerum vel rem fugiat quod necessitatibus
				laboriosam nostrum? Corrupti hic nam dolores magnam culpa illo ducimus!
				Officia, ad.'
						// srcImg='/profil1.jpeg'
						name='Naomie'
						childrenName='maman de Nathan'
					/>
				</SwiperSlide>
				<SwiperSlide className='pt-8 bg-[#faf8d5] px-10 text-lg rounded max-w-md'>
					<CardCarousel
						text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
				inventore repellendus esse rerum vel rem fugiat quod necessitatibus
				laboriosam nostrum? Corrupti hic nam dolores magnam culpa illo ducimus!
				Officia, ad.'
						// srcImg='/profil2.jpeg'
						name='Liliane'
						childrenName='maman de Noah'
					/>
				</SwiperSlide>
				<SwiperSlide className='pt-8 bg-[#faf8d5] px-10 text-lg rounded max-w-md'>
					<CardCarousel
						text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
				inventore repellendus esse rerum vel rem fugiat quod necessitatibus
				laboriosam nostrum? Corrupti hic nam dolores magnam culpa illo ducimus!
				Officia, ad.'
						// srcImg='/profil3.jpeg'
						name='Sophia'
						childrenName='maman de Jamal'
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default Caroussel;
