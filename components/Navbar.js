import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Tesla-logo.svg';
const Navbar = () => {
	return (
		<nav className="absolute w-full px-4 bg-transparent flex justify-between items-center font-medium text-sm">
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
						<a href='"https://tesla.com/solarpanels'>Solar Panels</a>
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
					<li className="py-2 px-4  hover:bg-black hover:bg-opacity-5 hover:rounded">
						Menu
					</li>
				</ul>
			</div>
			<div className="xl:hidden">
				<button className="py-2 px-4 bg-black bg-opacity-5 rounded">
					Menu
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
