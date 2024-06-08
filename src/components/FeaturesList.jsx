import React from 'react'
import Feature from './Feature'

export default function FeaturesList() {
  return (
		<section className="flex items-start justify-center max-lg:flex-col gap-8 py-10 px-4 md:px-9 mg:px-44">
			<Feature
				logo="/src/assets/icon-chat.png"
				title="You are our #1 priority"
				description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
			/>
			<Feature
				logo="/src/assets/icon-money.png"
				title="More savings means higher rates"
				description="The more you save with us, the higher your interest rate will be!"
			/>
			<Feature
				logo="/src/assets/icon-security.png"
				title="Security you can trust"
				description="We use top of the line encryption to make sure your data and money is always safe."
			/>
		</section>
	);
}
