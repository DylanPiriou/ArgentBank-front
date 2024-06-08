import React from 'react'

export default function Hero() {
  return (
		<section className='w-full h-[400px] relative'>
			<img src="/src/assets/bank-tree.jpeg" alt="" className='absolute inset-0 h-full w-full object-cover' />
            <div className='bg-white absolute right-[50px] top-1/2 -translate-y-1/2 p-10'>
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
