import React, { useState } from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Typed from 'react-typed';
import Image from 'next/image';

const footerNavigation = {
	social: [
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/cosentinozoe/',
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/channel/UC4lCAnFLP4x8TUvcvhUCA_A',
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'TikTok',
			href: 'https://www.tiktok.com/@zoecosentino_',
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 448 512" {...props}>
					<path
						fillRule="evenodd"
						d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		}
	],
}

const Social = () => {
	return (
		<>
		{footerNavigation.social.map((item) => (
			<a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white">
				<span className="sr-only">{item.name}</span>
				<item.icon className="h-10 w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" aria-hidden="true" />
			</a>
		))}
	</>
	)
}

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
		"/images/7.jpg",
		"/images/8.jpg",
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
						<div className="flex-1  space-x-10 absolute right-0 top-0 p-5 hidden sm:block mix-blend-difference ">
							<Social/>
						</div>
						<img className="max-w-none w-screen h-full object-cover object-center" src={each} />
						<div className="absolute top-0 sm:left-0 left-3/3 w-8/12 sm:w-4/12 md:w-3/12 lg:w-2/12 h-24 z-10">
							<Image src="/images/zc-logo-text-white.png" loading="eager" objectFit="contain" layout="responsive" width={600} height={300} />
						</div>
						<div className="absolute z-10 flex flex-col items-center ">
							<div className="flex-1">
								<h1 className="h-2 text-center md:text-6xl text-4xl font-bold text-white mb-36  mix-blend-difference">
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


							<div className="flex-1  mix-blend-difference">
								<button className="transition-opacity mt-4 py-5 px-16 border border-white text-white hover:bg-white hover:text-black focus:outline-none duration-1500 ease-in-out"
									onClick={() => { window.location.href = "https://store.zoecosentino.com" }}>
									Go to the store!
								</button>
							</div>

							
						</div>
						<div className="absolute z-10 mt-10 flex justify-center space-x-10 bottom-14 sm:hidden block mix-blend-difference p-10">

							<Social/>
							</div>
						<div className="absolute bottom-0 w-full text-center pb-4 text-sm mix-blend-difference">
							<span className="text-white">Made by <i>O.K</i></span>
						</div>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;