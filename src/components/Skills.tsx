import React from "react";

import HTML5Logo from "../assets/img/skills/html5.svg";
import CssLogo from "../assets/img/skills/css.svg";
import JSLogo from "../assets/img/skills/javascript.svg";
import TSLogo from "../assets/img/skills/typescript.svg";
import PhpLogo from "../assets/img/skills/php.svg";
import SassLogo from "../assets/img/skills/sass.svg";
import LessLogo from "../assets/img/skills/less.svg";
import TailwindLogo from "../assets/img/skills/tailwind.svg";
import BSLogo from "../assets/img/skills/bootstrap.svg";
import VueLogo from "../assets/img/skills/vue.svg";
import ReactLogo from "../assets/img/skills/react.svg";
import AngularLogo from "../assets/img/skills/angular.svg";
import VuexLogo from "../assets/img/skills/vuex.svg";
import ReduxLogo from "../assets/img/skills/redux.svg";
import NuxtLogo from "../assets/img/skills/nuxt.svg";
import NextLogo from "../assets/img/skills/next-js.svg";
import GitLogo from "../assets/img/skills/git.svg";
import GithubLogo from "../assets/img/skills/github.svg";
import GitLabLogo from "../assets/img/skills/gitlab.svg";
import JestLogo from "../assets/img/skills/jest.svg";
import LaravelLogo from "../assets/img/skills/laravel.svg";
import MysqlLogo from "../assets/img/skills/mysql.svg";
import FigmaLogo from "../assets/img/skills/figma.svg";
import SlackLogo from "../assets/img/skills/slack.svg";
import NotionLogo from "../assets/img/skills/notion.svg";
import JiraLogo from "../assets/img/skills/jira.svg";
import ClickupLogo from "../assets/img/skills/clickup.svg";
import DriveLogo from "../assets/img/skills/drive.svg";
import AnalyticsLogo from "../assets/img/skills/ga.svg";
import GtmLogo from "../assets/img/skills/gtm.svg";

function Skills() {
	const skills = [
		{
			title: "HTML5",
			icon: HTML5Logo
		},
		{
			title: "CSS3",
			icon: CssLogo
		},
		{
			title: "JavaScript",
			icon: JSLogo
		},
		{
			title: "TypeScript",
			icon: TSLogo
		},
		{
			title: "PHP",
			icon: PhpLogo
		},
		{
			title: "Sass",
			icon: SassLogo
		},
		{
			title: "Less",
			icon: LessLogo
		},
		{
			title: "Tailwind CSS",
			icon: TailwindLogo
		},
		{
			title: "Bootstrap",
			icon: BSLogo
		},
		{
			title: "Vue",
			icon: VueLogo
		},
		{
			title: "React",
			icon: ReactLogo
		},
		{
			title: "Angular",
			icon: AngularLogo
		},
		{
			title: "Vuex",
			icon: VuexLogo
		},
		{
			title: "Redux",
			icon: ReduxLogo
		},
		{
			title: "Nuxt",
			icon: NuxtLogo
		},
		{
			title: "Next JS",
			icon: NextLogo
		},
		{
			title: "Jest",
			icon: JestLogo
		},
		{
			title: "Laravel",
			icon: LaravelLogo
		},
		{
			title: "MySQL",
			icon: MysqlLogo
		},
		{
			title: "Git",
			icon: GitLogo
		},
		{
			title: "Github",
			icon: GithubLogo
		},
		{
			title: "Gitlab",
			icon: GitLabLogo
		},
		{
			title: "Figma",
			icon: FigmaLogo
		},
		{
			title: "Slack",
			icon: SlackLogo
		},
		{
			title: "Notion",
			icon: NotionLogo
		},
		{
			title: "Jira",
			icon: JiraLogo
		},
		{
			title: "Clickup",
			icon: ClickupLogo
		},
		{
			title: "Google Drive",
			icon: DriveLogo
		},
		{
			title: "Google Analytics",
			icon: AnalyticsLogo
		},
		{
			title: "Google Tag Manager",
			icon: GtmLogo
		}
	]

	const loopSkills = (startIndex: number, total: number) => {
		return skills.slice(startIndex, total).map((skill, index) => {
			return (
				<div className="col" key={index}>
					<div className="card h-100">
						<div className="card-body d-flex align-items-center">
							<div className="d-flex align-items-center w-100">
								<img src={skill.icon} alt="skill.title" width={50} />
								<p className="ms-4 mb-0">
									{skill.title}
								</p>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}

	return (
		<section className="container-md py-3 py-md-5" id="skills">
			<h2 data-aos="fade-up" className="fw-bold text-start text-sky mb-3">
				Skills
			</h2>
			<div
				data-aos="fade-up"
				className="d-flex flex-column"
			>
				<div className="mt-4">
					<h3 className="text-start text-sky fw-bold fs-5 mb-0">
						Programming & Markup Languages
					</h3>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3 g-3">
						{loopSkills(0, 5)}
					</div>
				</div>
				<div className="mt-4">
					<h3 className="text-start text-sky fw-bold fs-5 mb-0">
						Web Development Tools
					</h3>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3 g-3">
						{loopSkills(5, 19)}
					</div>
				</div>
				<div className="mt-4">
					<h3 className="text-start text-sky fw-bold fs-5 mb-0">
						Collaboration & Management Tools
					</h3>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3 g-3">
						{loopSkills(19, skills.length)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
