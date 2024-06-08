import React from 'react'

export default function Feature({ logo, title, description }) {
  return (
		<div className="w-full flex flex-col items-center jusitfy-center p-[40px] gap-6 text-center">
			<img
				src={logo}
				alt="feature"
				className="w-[152px] aspect-square p-[16px] rounded-full border-secondary border-[10px]"
			/>
			<h3 className="text-xl font-bold">{title}</h3>
			<p>{description}</p>
		</div>
	);
}
