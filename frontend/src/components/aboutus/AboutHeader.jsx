import React from 'react'

const AboutHeader = () => {
  return (
    <div className="min-h-screen flex relative z-10">
      <div className='max-w-[384px] max-h-96 w-full h-full bg-primary/20 right-10 top-7 blur-2xl rounded-full absolute -z-10 '></div>
      <div className='max-w-[384px] max-h-96 w-full h-full bg-primary/20 right-150 bottom-5 blur-2xl rounded-full absolute -z-10 '></div>
      <div className="container mx-auto px-5 flex grow items-center">
        <div className="flex flex-row items-center w-full">
          
          <div className="w-1/2">
            <div className='text-primary bg-primary/20 py-1 text-base w-[112px] text-nowrap text-center rounded-full mb-6 px-4'>
              OUR VISION
            </div>

            <h1 className="font-bold text-[#32294F] text-7xl max-w-127.5 mb-8">
              We’re Building the <span className='text-primary'>Future</span> of Automation
            </h1>

            <p className="text-base text-gray-600 mb-10 max-w-127.5">
              Empowering enterprises through invisible intelligence. We
              create fluid, AI-driven engines that transform complex
              workflows into effortless outcomes.
            </p>

            <div className='flex items-center gap-4'>
              <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/80">
                Get Started
              </button>
              <button className="border border-primary text-primary py-2 px-6 rounded-full hover:bg-primary/10">
                Contact Us
              </button>
            </div>
          </div>

          <div className='w-1/2 flex justify-end'>
            <img
              src="/aboutHero.webp"
              alt="aboutHero"
              width={505}
              height={505}
              className='max-w-[505px] max-h-[505px] object-cover shadow-primary rounded-3xl'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutHeader
