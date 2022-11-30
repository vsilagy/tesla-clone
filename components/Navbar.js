import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Tesla-logo.svg';
import { GrClose } from 'react-icons/gr';
import { HiChevronRight } from 'react-icons/hi';
const Navbar = () => {
	const [sideBar, setSideBar] = useState(false);

	const handleSideBar = () => {
		setSideBar(!sideBar);
	};
	return (
		<>
			<Head>
				<title>
					Tesla Clone | Electric Cars, Solar & Clean Energy
				</title>
				<meta
					name="description"
					content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."
				/>
			</Head>
			<nav className="absolute z-10 w-full px-4 bg-transparent flex justify-between items-center font-medium text-sm">
				<div className="p-5">
					<Link href="/">
						<Image
							src={logo}
							alt="tesla logo"
							className="w-[120px] h-6 lg:mr-16"
						/>
					</Link>
				</div>
				<div className="hidden xl:block">
					<ul className="flex">
						<li className="py-2 px-4 hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href='"https://tesla.com/models'>Model S</a>
						</li>
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href='"https://tesla.com/model3'>Model 3</a>
						</li>
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href='"https://tesla.com/modelx'>Model X</a>
						</li>
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href='"https://tesla.com/modely'>Model Y</a>
						</li>
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href='"https://tesla.com/solarroof'>Solar Roof</a>
						</li>
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href='"https://tesla.com/solarpanels'>
								Solar Panels
							</a>
						</li>
					</ul>
				</div>
				<div className="hidden xl:block">
					<ul className="flex">
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href="https://shop.tesla.com">Shop</a>
						</li>
						<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							<a href="https://tesla.com/teslaaccount">Account</a>
						</li>
						<li
							onClick={handleSideBar}
							className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
							Menu
						</li>
					</ul>
				</div>
				<div className="xl:hidden">
					<button
						onClick={handleSideBar}
						className="py-2 px-4 bg-black bg-opacity-5 rounded">
						Menu
					</button>
				</div>
			</nav>
			<div
				className={
					sideBar
						? 'absolute top-0 right-0 w-80 h-full z-10 bg-white transform translate-left-full '
						: 'fixed right-full'
				}>
				<div className="flex justify-end pt-5 px-8">
					<GrClose
						onClick={handleSideBar}
						className="p-2 rounded hover:bg-black/5 cursor-pointer"
						size={32}
					/>
				</div>
				<ul className="flex flex-col mt-10 mx-8 gap-3  text-sm text-[#393C41] font-medium">
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Model S
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Model 3
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Model X
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Model Y
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Solar Roof
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Solar Panel
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Existing Inventory
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Used Inventory
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Trade-In
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Test Drive
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Insurance
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Powerwall
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Comercial Energy
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Utilities
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Charging
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Find Us
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Support
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Investor Relations
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Shop
					</li>
					<li className="px-3 py-1 mr-4 rounded hover:bg-black/5  cursor-pointer">
						Account
					</li>
					<li className="flex items-center justify-between mr-4 px-3 py-1 rounded hover:bg-black/5  cursor-pointer">
						More
						<span>
							<HiChevronRight size={18} />
						</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
