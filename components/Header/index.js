import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Image from "next/image";

const Header = ({ handleAboutScroll, handleContactScroll, isBlog }) => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const iconSize = 26;

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<div
				className={`mt-10 hidden flex-row items-center justify-between sticky ${
					theme === "light" && "bg-white"
				} dark:text-white top-0 z-10 tablet:flex`}
			>
				<h1 onClick={() => router.push("/")} className="font-medium mob:p-2 laptop:p-0 cursor-none">
					游戏让世界更美好
				</h1>
				{!isBlog ? (
					<div className="flex">
						<Button
							onClick={() => {
								router.push("/portfolio");
							}}
						>
							作品集
						</Button>
						<Button onClick={handleAboutScroll}>关于我</Button>

						<Button
							onClick={() => {
								let ele = document.createElement("a");
								ele.target = "_blank";
								ele.href = "/resume.pdf";
								ele.click();
								ele.remove();
							}}
							classes="first:ml-1"
						>
							简历
						</Button>

						<Button onClick={handleContactScroll}>联系方式</Button>
						{mounted && theme && data.darkMode && (
							<Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
								<Image
									className="h-6"
									src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
									width={iconSize}
									height={iconSize}
									alt="mode"
								/>
							</Button>
						)}
					</div>
				) : (
					<div className="flex">
						<Button onClick={() => router.push("/")}>主页</Button>
						{mounted && theme && data.darkMode && (
							<Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
								<Image
									className="h-6"
									src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
									width={iconSize}
									height={iconSize}
									alt="mode"
								/>
							</Button>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
