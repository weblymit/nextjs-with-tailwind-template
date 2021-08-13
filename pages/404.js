import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);
	return (
		<Layout>
			<div className='container px-4 lg:px-36'>
				<div className='shadow-lg p-10 trans bg-gray-100 origin-center transform -rotate-1 my-20'>
					<h1 className='font-bold text-5xl'>404</h1>
					<p className='text-lg font-semibold py-4'>
						Ooop! la page demandée est introuvable :({" "}
					</p>
					<p>
						Vous allez être rediriger vers la page d'
						<Link href='/'>
							<a className='underline text-access-orange-default'>Accueil</a>
						</Link>{" "}
						:)
					</p>
				</div>
			</div>
		</Layout>
	);
}

export default NotFound;
