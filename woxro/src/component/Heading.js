import React from 'react'

function Heading() {
  return (
    <div>
          <div className='flex justify-between  bg-black'>
              <div className=' py-2 text-white flex text-sm'>
                  <p className='font-bold '>Now Hiring  :
                  </p> Looking for a job in Full Stack Development?
              </div>

              <div className='py-2 text-white flex text-sm  '>
                  <p className='gap-3'>+91 487 2080 212</p>
                  <p> Leshore Business Park, Thrissur</p>
              </div>
          </div>
          <div className='bg-white  py-3'>
              <img className='h-14 pl-3' src="https://woxro.com/public/assets/png/woxrologo.png" alt="logo" />
          </div>

          <div className=' flex justify-evenly bg-black text-white py-2'>
              <p>Home </p>
              <p>About Us </p>
              <p> Services</p>
              <p> Technology</p>
              <p> Careers</p>
              <p> Blog</p>
              <p>Our Works </p>
              <p> Contact us</p>
          </div>
          <div className='image h-auto w-full  felx justify-center  text-white'>
              {/* <video  width="100%" height="400" autoplay='true' muted="true" > 
            <source src="https://woxro.com/public/assets/video/banner.mp4" type="video/mp4"/> </video> */}
              <div className=' text-center text-6xl font-bold py-14'>
                  <p>Kerala's Leading Web</p> <p>Design Company</p>
              </div>

              <div className='text-center text-2xl  py-5'>
                  <p>Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</p>
              </div>
          </div>
    </div>
  )
}

export default Heading
