import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Vikasini
				</h1>
				<p className="text-md md:text-xl max-w-full mb-3 text-gray-600 dark:text-gray-300">
				Results-driven Cloud Engineer with hands-on experience in AWS, Azure, and GCP. Skilled in designing, deploying, and managing scalable cloud solutions with a focus on security, automation, and cost optimization. Proficient in IaC tools like Terraform and CloudFormation, with a passion for problem-solving and continuous learning. Adept at building reliable infrastructure and collaborating in fast-paced environments to drive innovation.{' '}
				</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
