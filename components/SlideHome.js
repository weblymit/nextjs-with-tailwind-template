// import Swiper core and required modules
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);

function SlideHome({ slideImg }) {
	const datas = slideImg[0].fields.image1;
	return (
		<Swiper
			// spaceBetween={5}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			// onSwiper={(swiper) => console.log(swiper)}
			// onSlideChange={() => console.log('slide change')}
		>
			{datas.map((data) => (
				<SwiperSlide key={data.sys.id}>
					<div className=''>
						<img
							// src={data.src}
							src={`https:${data.fields.file.url}`}
							className=' w-full lg:h-'
							alt="association accès Normandie Fatimata N'Gaide formation"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default SlideHome;
