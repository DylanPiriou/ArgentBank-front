import React from 'react'
import Button from './Button'

export default function AccountItem({ name, amount }) {
  return (
		<div className="w-full bg-white flex max-md:flex-col max-md:items-start items-center justify-between p-6 gap-2">
			<div className="flex flex-col items-start justify-center">
				<h3>{name}</h3>
				<p className="text-4xl font-bold">{amount}</p>
				<p>Available Balance</p>
			</div>
			<Button text="View transactions" />
		</div>
	);
}
