import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'I create visually appealing, user-friendly websites that reflect Users brand’s identity. My designs ensure smooth navigation, fast loading, and seamless user experiences across all devices.',
	},
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'I craft intuitive interfaces that enhance user engagement and functionality. I focus on modern design trends, usability, and consistency to deliver a polished, accessible product.',
	},
	{
		title: 'Web Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'I build dynamic and responsive websites using the latest technologies. From front-end to back-end, my solutions are secure, scalable, and tailored to meet your business needs.',
	},
];
