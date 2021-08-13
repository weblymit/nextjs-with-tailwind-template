// import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
	return (
		<div className='flex flex-col min-h-screen text-gray-700 bg-gray-50f'>
			<div>
				{/* <Navbar /> */}
			</div>
			<main className='flex-grow'>{props.children}</main>
			<Footer />
		</div>
	);
}
