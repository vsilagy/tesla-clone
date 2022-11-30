import { HiChevronDown } from 'react-icons/hi2';
const Hero = () => {
	return (
		<section className="h-screen w-screen">
			<div className="relative flex flex-col h-screen items-center bg-no-repeat bg-cover bg-center bg-[url('/Model3-Mobile.jpeg')] lg:bg-[url('/Model3-Desktop.jpeg')]">
				<div className="absolute inset-x-0 top-[15%] text-center ">
					<h1 className="text-[40px] font-medium">Model 3</h1>
					<p className="text-sm font-normal">
						<a
							href="https://www.tesla.com/drive"
							className="border-b border-black">
							Schedule a Test Drive
						</a>
					</p>
				</div>
				<div className="absolute inset-x-0 bottom-6 w-full flex flex-col items-center gap-14">
					<div className=" flex flex-col md:flex-row justify-center gap-4 sm:gap-6 w-full px-5 text-center text-sm font-medium">
						<a
							href="https://www.tesla.com/model3/design"
							className="py-3 flex-1 sm:flex-none md:w-72 bg-[#171A20]/80 text-white rounded">
							Custom Order
						</a>
						<a
							href="https://www.tesla.com/inventory/new/m3"
							className="py-3 flex-1 sm:flex-none md:w-72 bg-[#F4F4F4]/80 text-gray-700 rounded">
							Existing Inventory
						</a>
					</div>
					<button>
						<HiChevronDown className="text-gray-700" size={24} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
