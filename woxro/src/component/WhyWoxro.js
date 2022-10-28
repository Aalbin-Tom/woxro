import React from 'react'

function WhyWoxro() {
  return (
    <div>
          <div className='h-auto bg-white -mt-28 pb-10 '>
              <p className='tracking-[6px] font-bold text-xs text-center pt-14 text-slate-600' >WHY CHOOSE WOXRO</p>
              <p className='font-bold text-3xl text-center pt-7 '>How woxro claim to excel in the IT Sector? </p>
              <p className='tracking-[1px] font-medium text-sm text-center pt-7 text-slate-600'>
                  From the beginning, We have been setting up the team by individuals who have gone beyond the limits
                  of personal<br /> goals and who have the passion to do things from the bottom of their heart.
              </p>
              <div className='flex justify-center'>
                  <div className='flex justify-evenly'>
                      {/* 1st */}
                      <div className='pt-4 pl-5 flex'>
                          <div className="block rounded-lg shadow-lg bg-rose-50 w-64 h-50 ">
                              <div className="p-3 w-56 ">
                                  <h5 className="text-rose-300 text-sm font-medium mb-2">01</h5>
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">Quick
                                      response</h5>
                                  <p className="tracking-tighter text-gray-700 pb-4">
                                      Exceptionally fast implementation, deployment, and maintenance enables truly agile development,
                                  </p>
                              </div>
                          </div>
                      </div>
                      {/* 2nd */}
                      <div className='pt-4 pl-5 flex'>
                          <div className="block rounded-lg shadow-lg bg-green-100 w-64 h-50 ">
                              <div className="p-3 w-56 ">
                                  <h5 className="text-blue-200 text-sm font-medium mb-2">02</h5>
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">Requirement
                                      Gathering</h5>
                                  <p className="tracking-tighter text-gray-700 pb-4">
                                      Exceptionally fast implementation, deployment, and maintenance enables truly agile development,
                                  </p>
                              </div>
                          </div>
                      </div>
                      {/* 3rd */}
                      <div className='pt-4 pl-5 flex'>
                          <div className="block rounded-lg shadow-lg bg-rose-100 w-64 h-50 ">
                              <div className="p-3  w-56">
                                  <h5 className="text-rose-300 text-sm font-medium mb-2">03</h5>
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">QExperienced
                                      Staffs</h5>
                                  <p className="tracking-tighter text-gray-700 pb-4">
                                      We offer unlimited remote and onsite support with round-the-clock cover as standard and 24/7 options.
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

              <div className='flex justify-center'>
                  <div className='flex justify-evenly'>
                      {/* 1st */}
                      <div className='pt-4 pl-5 flex'>
                          <div className="block rounded-lg shadow-lg bg-gray-200 w-64 h-50 ">
                              <div className="p-3 w-56 ">
                                  <h5 className="text-gray-400 text-sm font-medium mb-2">04</h5>
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">Scaleable
                                      Platform</h5>
                                  <p className="tracking-tighter text-gray-700 pb-4">
                                      The Elastic infrastructure supporting thousands of concurrent users on an up-gradation basis.
                                  </p>
                              </div>
                          </div>
                      </div>
                      {/* 2nd */}
                      <div className='pt-4 pl-5 flex'>
                          <div className="block rounded-lg shadow-lg bg-yellow-100 w-64 h-50 ">
                              <div className="p-3 w-56 ">
                                  <h5 className="text-yellow-300 text-sm font-medium mb-2">05</h5>
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">Legacy
                                      Free</h5>
                                  <p className="tracking-tighter text-gray-700 pb-4">
                                      Applications & Platforms that never become obsolete and grow capabilities over time.
                                  </p>
                              </div>
                          </div>
                      </div>
                      {/* 3rd */}
                      <div className='pt-4 pl-5 flex'>
                          <div className="block rounded-lg shadow-lg bg-slate-100 w-64 h-50 ">
                              <div className="p-3 w-56 ">
                                  <h5 className="text-slate-400 text-sm font-medium mb-2">06</h5>
                                  <h5 className="text-gray-900 text-xl font-medium mb-2">100%
                                      Satisfaction</h5>
                                  <p className="tracking-tighter text-gray-700 pb-4">
                                      We believe we are nothing without delivery to our clients’ absolute satisfaction.
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          {/* Contact slide */}
          <div className='map h-auto  bg-black'>
              <div className='flex justify-between'>
                  {/* contact section 1 */}
                  <div className='pt-40 pl-12'>
                      <p className='text-left text-3xl font-bold pb-8 text-white leading-snug'>
                          To make requests for further <br />information, contact us via <br />our social channels.
                      </p>
                      <p className='text-white' >Our service is also available at UAE<br />
                          We just need a couple of hours!<br />
                          No more than 2 working days since receiving your request.</p>
                  </div>
                  {/* contact section 2 */}
                  <div className=' py-16 pr-20 '>
                      <div className='flex  justify-center'>
                          <form className='shadow-black max-w-[400px] w-92 bg-white p-8 px-8 rounded-md ' >
                              <h1 className='font-bold text-center text-2xl text-gray-700'> Let's get connected!</h1><br />
                              <h1 className='font-semibold text-center text-sm text-gray-500'> It's our pleasure to have a chance to cooperate.</h1>
                              <br />
                              <div className='flex  flex-col text-grey-500 py-2'>
                                  <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                                      id="name"
                                      type="text"
                                      name='emanameil'
                                      placeholder='Name*' />
                              </div>
                              <div className='flex  flex-col text-grey-500 py-2'>
                                  <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                                      id="email"
                                      type="email"
                                      name='email'
                                      placeholder='Email*' />
                              </div>
                              <div className='flex flex-col text-grey-500 py-2'>

                                  <input className='rounded-full bg-blue-200 mt-2 p-2 focus:border-red-500 focus:bg-grey-800 focus:outline-green-400'
                                      name='password'
                                      id="password"
                                      type="password"
                                      placeholder='Password *' />
                              </div>
                              <div className='flex justify-between text-gray-500 py-2'>
                              </div>
                              <br />
                              <div className='flex justify-center'>
                                  <button className="bg-transparent  text-slate-600 font-semibold hover:text-slate-600  py-2 px-4 border border-slate-600  rounded ">
                                      Send Message
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default WhyWoxro
