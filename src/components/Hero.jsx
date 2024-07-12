import React from 'react'

export default function Hero() {
  return (
		<section className='w-full h-auto flex items-center justify-center sm:justify-end relative'>
			<img src="/src/assets/bank-tree.jpeg" alt="" className='absolute z-[-1] h-full w-full object-cover' />
            <div className='w-full max-w-[364px] bg-white p-10 my-16 mx-4 sm:mx-20'>
                <h2 className='text-2xl font-bold mb-4'>
                    No fees.
                <br />
                    No minimum deposit.
                <br />
                    Hight interest rates.
                </h2>
                <p className='text-lg'>Open a savings account with Argent Bank today !</p>
            </div>
		</section>
	);
}
