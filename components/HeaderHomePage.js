import styled from "styled-components";
import MyConfig from "../myConfig";
import Navbar from "./Navbar";

function HeaderHomePage({ title1, title2 }) {
	const infoSite = MyConfig.siteMetadata;

	return (
		<Div className='text-gray-100 lg:h-screen'>
			<Navbar />
			<div className='flex justify-center content-end text-gray-100 px-4 md:px-0 '>
				<div className='py-32 md:py-44 lg:py-56 container'>
					{/* <Fade top> */}
					<div className='font-semibold pb-3 md:pb-2 text-centerd'>
						<h1 className='text-xl text-access-orange-light font-light uppercase md:text-3xl pb-2'>
							{infoSite.title}
						</h1>
						<h2 className='text-4xl md:text-4xl lg:text-7xl font-bold leading-tight md:leading-normal  md:max-w-6xl'>
							{infoSite.slogan}
						</h2>
					</div>
					{/* </Fade> */}
				</div>
			</div>
		</Div>
	);
}

export default HeaderHomePage;

const Div = styled.div`
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.12),
			rgba(24, 24, 25, 0.83)
		),
		url(${MyConfig.siteMetadata.headerHomeBg});
	background-size: cover;
	/* background-repeat: no-repeat; */
	background-position: center;
`;
