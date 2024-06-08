import React from "react";

export default function Button({ text, full, fit, action }) {
	return (
		<button
		onClick={action}
			className={`py-2 px-3 bg-secondary text-white ${
				full ? "w-full" : fit ? "w-fit" : "max-md:w-full w-fit"
			} hover:bg-primary transition duration-300`}
		>
			{text}
		</button>
	);
}
