import React, { useState } from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import Typed from 'react-typed';

const Slideshow = () => {
	const [buttonVisible, setButtonVisible] = useState(false);
	//Array of Images
	const images = [
		"images/1.jpg",
		"images/2.jpg",
		"images/3.jpg",
		"images/4.jpg",
		"images/5.jpg",
		"images/6.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10">
				{/*<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />*/}
			</div>
		),
		nextArrow: (
				<div className="mr-10">
				   {/*<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />*/}
			    </div>
		),
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center items-center w-screen h-screen relative">
						<img className="w-screen" src={each} />
						<div className="absolute z-10 flex flex-col justify-center items-center inset-0">
							<h1 className="text-center md:text-6xl text-4xl font-bold text-white mb-4">
								<Typed
									strings={["Hello, I'm Zoe."]}
									typeSpeed={20}
									startDelay={200}
									showCursor={false}
									onComplete={() => setButtonVisible(true)}
								/>
							</h1>
							{/*<p className="text-center md:text-2xl text-xl font-bold text-white">
							<Typed
									strings={["Shop now!"]}
									typeSpeed={20}
									startDelay={2000}
									showCursor={false}
									onComplete={() => setButtonVisible(true)}
								/>
				</p>*/}
							{buttonVisible && 
							<button className="transition-opacity mt-4 py-2 px-6 border-2 border-white rounded-md text-white hover:bg-white hover:text-black focus:outline-none duration-1500 ease-in-out"
                    
                                onClick={() => { window.location.href = "https://shop.zoecosentino.com" }}>
									Go to shop!
                        </button>
						}
						</div>
					</div>
				))}
			</Zoom>
		</div>
	);	
};

export default Slideshow;