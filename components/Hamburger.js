import React from "react";
import { BiMenu } from "react-icons/bi";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Link from "next/link";

function Hamburger({ links }) {
	const [state, setState] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState(open);
	};
	return (
		<div>
			<BiMenu
				onClick={toggleDrawer(true)}
				className='text-access-orange-default text-5xl'
			/>
			<Drawer anchor='top' open={state} onClose={toggleDrawer(false)}>
				<div className='h-screen bg-access-orange-default'>
					<p
						onClick={toggleDrawer(false)}
						className='text-4xl font-black  text-right pr-8 pt-5'
					>
						x
					</p>
					<ul className='p-4 pt-28 text-center text-2xl text-gray-900d font-semibold'>
						{links.map(({ label, style, href }) => (
							<li
								key={label}
								className={`py-2 ${
									style == "style"
										? "bg-pink-600 rounded-lg text-gray-900d mx-12"
										: ""
								}`}
							>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			</Drawer>
		</div>
	);
}

export default Hamburger;
