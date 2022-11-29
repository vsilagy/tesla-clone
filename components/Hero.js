const Hero = () => {
	return (
		<section className="h-screen w-screen">
			<div className="flex h-screen items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('/Model3-Mobile.jpeg')] lg:bg-[url('/Model3-Desktop.jpeg')]">
				<div className="-mt-[36rem] text-center space-y-3">
					<h1 className="text-[40px] font-medium">Model 3</h1>
					<p className="text-sm font-normal">
						<a
							href="https://www.tesla.com/drive"
							className="underline">
							Schedule a Test Drive
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
