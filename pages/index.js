import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Image from "next/image";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
	// Ref
	const aboutRef = useRef();
	const contactRef = useRef();

	const handleAboutScroll = () => {
		window.scrollTo({
			top: aboutRef.current.offsetTop,
			left: 0,
			behavior: "smooth",
		});
	};

	const handleContactScroll = () => {
		window.scrollTo({
			top: contactRef.current.offsetTop,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={`relative ${data.showCursor && "cursor-none"}`}>
			<Cursor />
			<Head>
				<title>{data.name}</title>
			</Head>

			<div className="gradient-circle"></div>
			<div className="gradient-circle-bottom"></div>

			<div className="container mx-auto mb-10">
				<Header handleAboutScroll={handleAboutScroll} handleContactScroll={handleContactScroll} />

				<div className="w-full m-10 flex justify-center items-center">
					<Image
						className="rounded-full"
						src="/images/portrait.jpg"
						alt="portrait"
						objectFit="contain"
						width="300"
						height="300"
					/>
				</div>

				<div className="laptop:mt-20 mt-10">
					<div className="mt-5">
						<h1 className="text-8xl p-1 tablet:p-2 text-bold w-full">欢迎 👋</h1>
						<h1 className="text-8xl p-1 tablet:p-2 text-bold w-full ">我是陈宇卿</h1>
						<h1 className="text-8xl p-1 tablet:p-2 text-bold w-full ">一个热爱生活的游戏策划</h1>
						<h1 className="text-8xl p-1 tablet:p-2 text-bold w-full">来自清华大学IMDT</h1>
					</div>
				</div>
				{/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
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
				</div> */}

				<div className="mt-10 laptop:mt-20 p-2 laptop:p-0" ref={aboutRef}>
					<div className="w-3/4">
						<h1 className="text-2xl text-bold">关于我</h1>
						<p className="mt-5 text-xl leading-normal">
							我本科毕业于<span className="text-blue-600">北京工业大学</span>
							樊恭烋荣誉学院计算机科学与技术专业，硕士就读于
							<span className="text-purple-600">清华大学</span>
							互动媒体设计与技术专业。我热爱游戏和游戏设计，夯实的程序基础让我在原型实现阶段如鱼得水，广泛的游戏涉猎让我在设计的思考上鞭辟入里。卡牌、射击、动作是我最爱的三个品类，
							<span className="italic"> 巫师之昆特牌 </span>、
							<span className="italic"> Apex Legends </span>和<span className="italic"> 怪物猎人 </span>
							是其中的代表。我爱独立游戏，也拥抱商业游戏，那些震撼人心的游戏瞬间让我下定决心成为一名顶尖的游戏设计师，它们在我人生成长过程中起到了至关重要的作用，为我打开了世界的另一扇门。我始终相信，游戏可以改变人，帮助人与人、人与世界建立深刻的连接，就像其他艺术形式一样。
							<span className="font-black">我将终身致力于用游戏的媒介改变世界。</span>
						</p>
					</div>
				</div>

				<div ref={contactRef}>
					<Footer />
				</div>
			</div>
		</div>
	);
}
