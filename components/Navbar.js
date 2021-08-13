import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import MyConfig from "../myConfig";

function Navbar({ textLink }) {
	const infoSite = MyConfig.siteMetadata;
	const menuLink = MyConfig.siteMetadata.menuLinks;

	const router = useRouter();
	const routeSlug = router.pathname;
	return (
		<nav className={`py-8 container  ${infoSite.navBarBg}`}>
			<div className=''>
				<ul className='flex items-center justify-between'>
					<li>
						<Link href='/'>
							<a className=''>
								<img
									src={infoSite.logo}
									className='w-16 md:w-24'
									alt={infoSite.logoAlt}
								/>
							</a>
						</Link>
					</li>
					<ul className='hidden lg:flex items-center justify-between space-x-4 text-lgl uppercase font-bol'>
						{menuLink.map(({ href, label, style }) => (
							<li
								key={`${href}${label}`}
								className={`py-2 ${
									style == "style"
										? "bg-pink-600 rounded-lg text-gray-100 font-bold px-2 shadow text-lg"
										: ""
								} ${href == routeSlug ? "activeClass" : ""}`}
							>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
					<div className='lg:hidden'>
						<Hamburger links={menuLink} />
					</div>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
