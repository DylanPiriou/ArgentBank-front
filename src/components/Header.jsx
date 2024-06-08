import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isLogged, setIsLogged] = useState(false)
    
  return (
		<header className="w-full h-16 flex items-center justify-between px-4 md:px-9 mg:px-44">
			<Link to="/" className="w-[200px]">
				<img src="/src/assets/argentBankLogo.png" alt="ArgentBank" />
			</Link>
			{isLogged ? (
				<div className='w-fit flex gap-3'>
					<Link to="/user" className="flex items-center justify-center">
						<img src="/src/assets/icon-user.svg" alt="logo utilisateur" />
						<p className="font-bold"> John DOE </p>
					</Link>
					<Link to="/" className="flex items-center justify-center">
						<img src="/src/assets/logout.svg" alt="logo utilisateur" />
						<p className="font-bold"> Sign Out </p>
					</Link>
				</div>
			) : (
				<Link to="/login" className="flex items-center justify-center gap-1">
					<img src="/src/assets/icon-user.svg" alt="logo utilisateur" />
					<p className="font-bold"> Sign In </p>
				</Link>
			)}
		</header>
	);
}
