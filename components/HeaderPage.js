import styled from "styled-components";
import MyConfig from "../myConfig";
import Navbar from "./Navbar";

function HeaderPage({ title1, title2 }) {
	const infoSite = MyConfig.siteMetadata;

	return (
		<Div className='text-gray-100 '>
			<Navbar />
			<div className='flex justify-center content-end text-gray-100 px-4 md:px-0 '>
				<div className='py-20 container'>
					{/* <Fade top> */}
					<div className='font-semibold pb-3 md:pb-2 text-centerd'>
						<h1 className='text-xl text-access-orange-light font-light uppercase md:text-3xl pb-2'>
							{infoSite.title}
						</h1>
						<h2 className='text-4xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-normal  md:max-w-6xl'>
							{title2}
						</h2>
					</div>
					{/* </Fade> */}
				</div>
			</div>
		</Div>
	);
}

export default HeaderPage;

const Div = styled.div`
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.12),
			rgba(24, 24, 25, 0.83)
		),
		url(${MyConfig.siteMetadata.headerBg});
	background-size: cover;
	/* background-repeat: no-repeat; */
	background-position: center;
`;
