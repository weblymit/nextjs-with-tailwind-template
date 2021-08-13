import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

module.exports = {
	siteMetadata: {
		title: "Title of site",
		slogan: "Voici le slogan de notre entreprise",
		description: "description du site ...",
		siteUrl: "https://weblymit.fr",
		image: "/vercel.svg",
		logo: "/vercel.svg",
		logoAlt: "text logo alt",
		headerHomeBg:
			"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
		headerBg:
			"https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
		author: `@weblymit`,
		menuLinks: [
			{
				label: "Accueil",
				href: "/",
			},
			{
				label: "à propos",
				href: "/qui-sommes-nous",
			},

			{
				label: "Contact",
				href: "/contact",
			},
		],
		basePath: "/",
		navBarBg: "bg-red-700",
		socilaMedia: [
			{
				href: "https://www.facebook.com/",
				component: <FaFacebook className='text-3xl opacity-60 ' />,
			},
			{
				href: "https://www.twiter.com",
				component: <FaTwitter className='mx-4 text-3xl opacity-60' />,
			},
			{
				href: "https://www.linkedin.com",
				component: <FaLinkedinIn className='text-3xl opacity-60' />,
			},
		],
	},
};
