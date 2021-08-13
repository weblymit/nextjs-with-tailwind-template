import React from "react";
import MyConfig from "../myConfig";
import Header from "../components/HeaderHomePage";

const IndexHome = () => {
	const infoSite = MyConfig.siteMetadata;

	return (
		<div>
			<Header />
			<section className='container py-12'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque,
					tempore, error iure nihil nobis facilis laudantium porro similique
					accusantium sit. Ducimus sunt debitis eaque fugit cum aperiam
					veritatis velit!
				</p>
			</section>
		</div>
	);
};

export default IndexHome;
