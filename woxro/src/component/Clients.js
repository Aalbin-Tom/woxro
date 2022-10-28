import React from 'react'

function Clients() {
  return (
    <div>
          <div className='h-[36rem] '>
              <div>
                  <p className='tracking-[6px] font-bold text-xs text-center pt-14 text-slate-600' > OUR CLIENTS GLOBALLY</p>
                  <p className='font-bold text-3xl text-center pt-7 '>We are dependent on</p>
                  <p className='tracking-[1px] font-medium text-sm text-center pt-7 text-slate-600'>
                      The post-digital age shows no signs of slowing down. And the need for rapid business transformation has never been <br />greater.
                      We meet clients wherever they are on their paths to change—in every industry across the globe—and partner <br /> with them to create
                      lasting value in every direction.
                  </p>
              </div>
              <div className='flex  justify-evenly mt-12'>
                  <img src="https://woxro.com/public/assets/png/h-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/h-1-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/h-2-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/h-3-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/h-4-s.png" alt="" />

              </div>
              <div className='flex  justify-evenly mt-12'>
                  <img src="https://woxro.com/public/assets/png/gem-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/t-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/subway_woxroclientlogo-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/smartpets_woxroclientlogo-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/argos_woxroclientlogo-s.png" alt="" />

              </div>
              <div className='flex justify-evenly mt-12'>
                  <img src="https://woxro.com/public/assets/png/allensolly_woxroclient-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/LG_woxroclientlogopng-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/ensureacademy_woxroclientlogo-s.png" alt="" />
                  <img src="https://woxro.com/public/assets/png/jdlabs_woxroclientlogo-s.png " alt="" />
                  <img src="https://woxro.com/public/assets/png/bookmyshow_woxroclientlogo-s.png" alt="" />

              </div>
          </div>


          <div className='space pt-16 pl-12 '>

              <p className='font-extrabold text-white text-5xl leading-[4.5rem] '>
                  Digital Solutions For<br />
                  Your Business
              </p>
              <p className='text-white text-sm pt-2'>
                  We bring your business online and raise your brand<br />
                  to the next level , thanks for our wonderful team<br />
                  of professionals at woxro
              </p>
              <div className='flex  gap-7 pt-12'>
                  <button className="bg-transparent  text-white font-semibold hover:text-slate-600 py-2 px-4 border border-white  rounded">
                      Client Login
                  </button>
                  <button className="bg-transparent  text-white font-semibold hover:text-slate-600 py-2 px-4 border border-white rounded">
                      Schedule meeting
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Clients
