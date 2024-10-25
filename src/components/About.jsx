import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-full">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				Results-driven Cloud Engineer with hands-on experience in AWS, Azure, and GCP. Skilled in designing, deploying, and managing scalable cloud solutions with a focus on security, automation, and cost optimization. Proficient in IaC tools like Terraform and CloudFormation, with a passion for problem-solving and continuous learning. Adept at building reliable infrastructure and collaborating in fast-paced environments to drive innovation.
				</p>
				<a
					href="vikasini@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					vikasini@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Vikasini "
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
