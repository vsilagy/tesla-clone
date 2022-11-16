import Image from 'next/image';
import logo from '../public/Tesla-logo.svg';
const Navbar = () => {
	return (
		<nav className="absolute w-full px-8 bg-transparent flex justify-between items-center font-medium text-sm">
			<div className="p-5">
				<Image
					src={logo}
					alt="tesla logo"
					className="w-[120px] h-6"
				/>
			</div>
			<div className="hidden lg:block">
				<ul className="flex gap-8">
					<li>
						<a href='"https://tesla.com/models'>Model S</a>
					</li>
					<li>
						<a href='"https://tesla.com/model3'>Model 3</a>
					</li>
					<li>
						<a href='"https://tesla.com/modelx'>Model X</a>
					</li>
					<li>
						<a href='"https://tesla.com/modely'>Model Y</a>
					</li>
					<li>
						<a href='"https://tesla.com/solarroof'>Solar Roof</a>
					</li>
					<li>
						<a href='"https://tesla.com/solarpanels'>Solar Panels</a>
					</li>
				</ul>
			</div>
			<div className="hidden lg:block">
				<ul className="flex gap-8">
					<li>
						<a href="https://shop.tesla.com">Shop</a>
					</li>
					<li>
						<a href="https://tesla.com/teslaaccount">Account</a>
					</li>
					<li>Menu</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
