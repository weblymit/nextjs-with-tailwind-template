import Link from "next/link";
import MyConfig from "../myConfig";

function Footer({ urlLogo, imageLogoAlt }) {
	const infoSite = MyConfig.siteMetadata;
	const menuLink = infoSite.menuLinks;
	const socialMedia = infoSite.socilaMedia;

	return (
		<div className='bg-access-orange-defaults bg-gray-200  py-16 lg:py-28'>
			<div className='container px-4 '>
				<Link href='/'>
					<a>
						<img
							src={infoSite.logo}
							className='w-16 md:w-24 mx-auto '
							alt={infoSite.logoAlt}
						/>
					</a>
				</Link>
				<h2 className='text-3xl lg:text-4xl font-black text-center pb-6 pt-2 lg:pt-6'>
					{infoSite.title}
				</h2>
				<ul className='flex flex-col lg:flex-row items-center lg:justify-center text-sm pb-5'>
					{menuLink.map(({ href, label, style }) => (
						<li key={`${href}${label}`} className={`py-2 px-5`}>
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
				<div className='flex justify-center items-center py-5 text-gray-400'>
					{socialMedia.map(({ href, component }) => (
						<Link href={href} key={href}>
							<a target='_blank' rel='noopener noreferrer'>
								{component}
							</a>
						</Link>
					))}
				</div>
				<div className='text-xs text-center'>
					Copyright © {new Date().getFullYear()}{" "}
					<span className='text-sm  py-1 uppercase'>{infoSite.title}</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
