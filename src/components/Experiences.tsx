import React from "react";

import ExperienceCard from "./utils/ExperienceCard";

function Experiences() {
	const experiences = [
		{
			title: "Frontend Developer",
			company: "Gramedia",
			companyLink: "https://gramedia.com",
			period: "Jan 2023 - Dec 2023",
			description: `
				Joined for full time position, working in a Retail, Bookstores & Education company. 
				Maintained Gramedia Web Apps (gramedia.com). Built and developed user interfaces using Angular 
				and Typescript. Integrating backend data with Gramedia’s REST API. Implemented Google Analytics 4 
				using Google Tag Manager, also implemented Meta and TikTok Pixel Tracker for Gramedia Web Apps. 
				Collaborated with other developers  to develop features and conduct code review. Participated in 
				UI/UX Design review. Work in agile environment.
		  	`,
			points: [
				`Assisted SEO team to conduct Google Analytics 4 migration, implemented the new version of 
				Google Analytics 4 using Google Tag Manager to improve the analytics data readability and 
				identify customer’s behavior on the Google Analytics Platform. Also implemented Meta Pixel 
				Tracker and TikTok Pixel Tracker.`,
				"Developed new Cart and Checkout features for Gramedia Web Apps, aims to improve user experience.",
				"Mostly did bugfixes related to user interfaces in Gramedia’s FE components.",
			],
		},
		{
			title: "Frontend Developer",
			company: "Glance.sg",
			companyLink: "https://glance.sg",
			period: "Nov 2022 - May 2023",
			description: `
				Joined for full time position, working in a Talent and Company Services company. Maintained Glance Web Apps (glance.sg). 
				Built user interfaces using Vue JS and integrating backend data using Laravel and Inertia frameworks. Often collaborate 
				with Backend Developer. The common tasks are troubleshooting features in production, debugging errors on specific feature, 
				and doing bugfixes related in either feature or user interfaces.
		  	`,
			points: [
				"Developed Glance Talent Recommendation feature, ensuring company can get the best talents for their projects.",
				"Fixed user interfaces for Glance Talent and Company Dashboard to improve data delivery viewed by user.",
				"Fixed user interfaces for Glance Landing Page.",
				"Developed user interfaces for Talent and Company order tracking to visualize order status.",
			],
		},
		{
			title: "Product Engineer (Frontend Web)",
			company: "Jala Tech",
			companyLink: "https://jala.tech",
			period: "Sep 2022 - Jun 2023",
			description: `
				Joined as an intern for part time position, working in a aquacultural company. Maintained Jala Web Apps 
				(app.jala.tech). Built and developed user interfaces using Vue and collaborate with Backend Developer 
				to integrate backend data using Laravel framework. Mostly doing user interface bugfixes and contributed 
				in features development. Participated in UI/UX Design review. Work in agile environment.
			`,
			points: [
				"Developed Telegram Bot for Jala Tech to support local shrimp farmers.",
				"Improved user interfaces for home dashboard on Jala Web Apps.",
				"Developed new pond dashboard feature to improve the quality of ponds data delivery.",
			],
		},
	];

	const experiencesList = experiences.map((exp, index) => {
		return <ExperienceCard experience={exp} key={index} />;
	});

	return (
		<section className="container-md py-3 py-md-5" id="experiences">
			<h2 data-aos="fade-up" className="fw-bold text-start text-sky mb-3">
				Experiences
			</h2>
			<div className="flex flex-col">{experiencesList}</div>
		</section>
	);
}

export default Experiences;
