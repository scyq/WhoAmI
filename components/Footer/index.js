import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
	return (
		<>
			<div className="mt-20">
				<div>
					<h1 className="text-2xl text-bold">联系方式</h1>
					<div className="mt-10">
						<h1 className="mt-5 mb-5 text-4xl font-black">让我们一起做出更好的游戏</h1>
						<div className="mt-5">
							<Socials />
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
				© 2023 by Yuqing Chen. All rights reserved.
			</h1>
		</>
	);
};

export default Footer;
