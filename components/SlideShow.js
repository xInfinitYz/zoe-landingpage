import React, { useState } from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Typed from 'react-typed';
import Image from 'next/image';

const Slideshow = () => {
	const [buttonVisible, setButtonVisible] = useState(false);
	//Array of Images
	const images = [
		"/images/1.jpg",
		"/images/2.jpg",
		"/images/3.jpg",
		"/images/4.jpg",
		"/images/5.jpg",
		"/images/6.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		arrows: false,
		pauseOnHover: false,
		canSwipe: true,
		prevArrow: (
			<div className="ml-10">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
			<div className="mr-10">
				<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center items-center w-screen h-screen relative">

						<img className="max-w-none w-screen h-full object-cover object-center" src={each} />
						<div className="absolute top-0 sm:left-0 left-3/3 w-8/12 sm:w-4/12 md:w-3/12 lg:w-2/12 h-24 z-10"> 
                            <Image src="/images/zc-logo-text-white.png" loading="eager" objectFit="contain" layout="responsive" width={600} height={300} />
                        </div>
						<div className="absolute z-10 flex flex-col items-center ">
							<div className="flex-1">
							<h1 className="h-2 text-center md:text-6xl text-4xl font-bold text-white mb-36">
								<Typed
									strings={["I'm Zoe.", "Shop now!"]}
									typeSpeed={100}
									backDelay={5000}
									backSpeed={100}
									startDelay={200}
									showCursor={false}
									loop
								/>
							</h1>
							</div>
							{/*<p className="text-center md:text-2xl text-xl font-bold text-white">
							<Typed
									strings={["Shop now!"]}
									typeSpeed={20}
									startDelay={2000}
									showCursor={false}
									onComplete={() => setButtonVisible(true)}
								/>
				</p>*/}
				<div className="flex-1">
							<button className="transition-opacity mt-4 py-2 px-6 border border-white text-white hover:bg-white hover:text-black focus:outline-none duration-1500 ease-in-out"
								onClick={() => { window.location.href = "https://store.zoecosentino.com" }}>
								   Go to the store!
							</button>
							</div>

						
						</div>
						<div className="absolute bottom-0 w-full text-center pb-4 text-sm">
								<span className="text-white">Made with ❤️ &nbsp; by Oleksandr Kyselov</span>
							</div>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;