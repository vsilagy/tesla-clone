import { BsChevronDown } from 'react-icons/bs';
const Hero = () => {
	return (
		<section className="h-screen w-screen">
			<div className="flex flex-col h-screen items-center justify-between bg-no-repeat bg-cover bg-center bg-[url('/Model3-Mobile.jpeg')] lg:bg-[url('/Model3-Desktop.jpeg')]">
				<div className="mt-36 text-center ">
					<h1 className="text-[40px] font-medium">Model 3</h1>
					<p className="text-sm font-normal">
						<a
							href="https://www.tesla.com/drive"
							className="border-b border-black">
							Schedule a Test Drive
						</a>
					</p>
				</div>
				<div className="flex flex-col items-center gap-16 mb-8">
					<div className="space-x-8 text-white">
						<button className="py-2 px-16 bg-gray-700 rounded">
							Custom Order
						</button>
						<button className="py-2 px-16 bg-gray-300 rounded">
							Existing Inventory
						</button>
					</div>
					<button>
						<BsChevronDown />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
