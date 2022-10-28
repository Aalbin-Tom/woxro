import React from 'react'

function RecentWorks() {
  return (
    <div>
          <div className='h-[46rem] bg-slate-100'>

              <p className='tracking-[6px] font-bold text-xs text-center pt-14 text-slate-700' >OUR RECENT WORKS</p>
              <p className='font-bold text-3xl text-center pt-7 '>Proud projects that make us stand out</p>
              <p className='tracking-[2px] font-medium text-sm text-center pt-7 text-slate-700'>
                  To achieve and maintain high standards we are committed to investing in the most talented IT support specialists in <br />
                  India, with the experience, creativity, and qualifications to exceed the highest expectations. We are known for our<br />
                  works and we hope you enjoy looking at some of our recent works.
              </p>
              <div className='works flex justify-evenly'>
                  <div className='font-medium text-xs text-center pt-14 '>
                      <div className="rounded-sm shadow-lg bg-white w-80">
                          <img className="transition duration-700 ease-in-out hover:scale-95 rounded-lg" src="https://woxro.com/public/assets/png/recentworks/boohoo-s.png" alt="" />
                          <div className="p-6">
                              <h5 className="text-gray-900 text-xl font-medium ">Boohoo</h5>
                              <p className="text-gray-700 text-base ">
                                  E-commerce Website
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className='font-medium text-xs text-center pt-14 '>
                      <div className="rounded-sm shadow-lg bg-white w-80">
                          <img className="transition duration-700 ease-in-out hover:scale-95  rounded-t-lg" src="https://woxro.com/public/assets/png/recentworks/ashteaderp-s.png" alt="" />
                          <div className="p-6">
                              <h5 className="text-gray-900 text-xl font-medium ">Ashtead
                              </h5>
                              <p className="text-gray-700 text-base ">
                                  Web Application
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className='font-medium text-xs text-center pt-14 '>
                      <div className="rounded-sm shadow-lg bg-white w-80">
                          <img className="transition duration-700 ease-in-out hover:scale-95  rounded-t-lg" src="https://woxro.com/public/assets/png/recentworks/dailytips-s.png" alt="" />
                          <div className="p-6">
                              <h5 className="text-gray-900 text-xl font-medium ">Dailytips</h5>
                              <p className="text-gray-700 text-base ">
                                  Mobile Application
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='flex justify-center pt-16 '>
                  <button className="bg-transparent  text-slate-600 font-semibold hover:text-black py-2 px-4 border border-slate-600  rounded">
                      view projects
                  </button>
              </div>
          </div>
    </div>
  )
}

export default RecentWorks
