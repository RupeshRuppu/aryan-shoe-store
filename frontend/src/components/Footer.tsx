import React from "react";

const Footer = () => {
	return (
		<footer className="w-screen p-10 bg-[#232F3E] opacity-90 flex justify-center items-center">
			<div className="grid grid-cols-3 gap-4">
				<section>
					<p className="text-lg text-slate-100 mb-4">Get to Know Us</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">
						About Slipper Boss
					</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">Careers</p>
				</section>
				<section>
					<p className="text-lg text-slate-100 mb-4">Connect with Us</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">
						Facebook
					</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">
						Instagram
					</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">Twitter</p>
				</section>
				<section>
					<p className="text-lg text-slate-100 mb-4">Let Us Help You</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">
						Your Account
					</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">
						Return Center
					</p>
					<p className="cursor-pointer hover:text-slate-200 text-sm">
						100% Purchase Protection
					</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
