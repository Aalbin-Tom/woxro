import React from 'react'

function Service () {
  return (
    <div>
          <div className=' '>
              <p className='text-center font-bold text-base py-8 tracking-[7px]'>SERVICES WE DELIVER</p>
              <p className='pl-32 pr-20 text-center font-bold text-4xl py-9'> Preparing for your success, we provide truly prominent IT solutions.</p>
          </div>
          <div className='h-[40rem] relative' >
              <div className='flex justify-evenly h-72' >

                  {/* 1st  */}
                  <div className='pt-4 pl-5 flex'>
                      <div className="block rounded-lg shadow-lg bg-blue-100 w-80 ">
                          <img className='pl-4 pt-4' src="https://woxro.com/public/assets/png/services/webdesigning.png" alt="" />
                          <div className="p-3">
                              <h5 className="text-gray-900 text-xl font-medium mb-2">Web Designing</h5>
                              <p className="tracking-tighter text-gray-700 ">
                                  We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.
                              </p>
                          </div>
                      </div>
                  </div>
                  {/* 2nd */}
                  <div className='pt-4 pl-5 flex '>
                      <div className="block rounded-lg shadow-lg bg-fuchsia-100 w-80 ">
                          <img className='pl-4 pt-4' src="https://woxro.com/public/assets/png/services/webapplication.png" alt="" />
                          <div className="p-3">
                              <h6 className="text-gray-900 text-xl font-semibold">Web Application</h6>
                              <p className=" tracking-tighter text-gray-700 ">
                                  We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions.Look no further if you are in search of a professional partner who can develop stunning web applications.
                              </p>
                          </div>
                      </div>
                  </div>
                  {/* 3rd */}
                  <div className='pt-4 pl-5 flex '>
                      <div className="block rounded-lg shadow-lg bg-yellow-100 w-80 ">
                          <img className='pl-4 pt-4' src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png" alt="" />
                          <div className="p-3">
                              <h6 className="text-gray-900 text-xl font-semibold">Mobile App Development</h6>
                              <p className="tracking-tighter text-gray-700 ">
                                  We develop high-quality and effective applications for your business.Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.
                              </p>
                          </div>
                      </div>
                  </div>


              </div>
              <div className='flex justify-evenly' >

                  {/* 4th  */}
                  <div className='pt-4 pl-5 flex'>
                      <div className="block rounded-lg shadow-lg bg-green-100 w-80 ">
                          <img className='pl-4 pt-4' src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png" alt="" />
                          <div className="p-3">
                              <h5 className="text-gray-900 text-xl font-medium mb-2">Ecommerce Development</h5>
                              <p className="tracking-tighter text-gray-700 ">
                                  For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business..                </p>
                          </div>
                      </div>
                  </div>
                  {/* 5th */}
                  <div className='pt-4 pl-5 flex '>
                      <div className="block rounded-lg shadow-lg bg-pink-100 w-80 ">
                          <img className='pl-4 pt-4' src="https://woxro.com/public/assets/png/services/digitalmarketing.png" alt="" />
                          <div className="p-3">
                              <h6 className="text-gray-900 text-xl font-semibold"> Digital Marketing</h6>
                              <p className="tracking-tighter text-gray-700 ">
                                  We bring together expertise in brand marketing and sustainability to design and implement ideas in branding.We also bring brand purpose to life by communicating great stories.Now
                              </p>
                          </div>
                      </div>
                  </div>
                  {/* 6th */}
                  <div className='pt-4 pl-5 flex '>
                      <div className="block rounded-lg shadow-lg bg-violet-100 w-80 ">
                          <img className='pl-4 pt-4' src="https://woxro.com/public/assets/png/services/graphic.png" alt="" />
                          <div className="p-3">
                              <h6 className="text-gray-900 text-xl font-semibold">Graphic Designing</h6>
                              <p className=" tracking-tighter text-gray-700 ">
                                  We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='globe h-72 bg-black'>
              <div className='flex justify-between pt-24 pl-10 w-auto'>
                  <div className=' text-3xl'>
                      <p className='font-bold text-white pl-3'>
                          We offer all kinds of IT services that <br /> ensure your success
                      </p>
                  </div>
                  <div className='text-xl flex font-bold text-white gap-9 h-12 pr-4'  >
                      <button className="pl-8 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-whitw hover:border-transparent rounded">
                          contact us
                      </button>
                      <button className="pl-8 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
                          let's talk
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Service 
