import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Image from "next/image";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../data/portfolio.json";

export default function Portfolio() {
	return (
		<div className={`relative ${data.showCursor && "cursor-none"}`}>
			<Cursor />
			<Head>
				<title>{data.name}</title>
			</Head>

			<div className="gradient-circle"></div>
			<div className="gradient-circle-bottom"></div>

			<div className="container mx-auto mb-10">
				<Header isBlog />

				<div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
					<h1 className="text-2xl text-bold">Work.</h1>

					<div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
						{data.projects.map((project) => (
							<WorkCard
								key={project.id}
								img={project.imageSrc}
								name={project.title}
								description={project.description}
								onClick={() => window.open(project.url)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
