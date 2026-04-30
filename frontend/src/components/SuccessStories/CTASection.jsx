import React from 'react'

const SuccessStoriesCTA = () => {
	return (
		<section className="py-16 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="max-w-5xl mx-auto bg-linear-to-r from-blue-700 to-blue-500 rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center text-white shadow-lg">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-2xl md:text-4xl font-semibold mb-4">Ready to transform your business?</h2>
						<p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto mb-8">Join hundreds of industry leaders using intelligent automation to drive growth and efficiency.</p>

						<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
							<button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">Schedule Demo</button>
							<button className="border border-blue-300 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">Talk to Expert</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SuccessStoriesCTA
