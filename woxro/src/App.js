import './App.css';

function App() {
  return (

    <div className="main flex flex-row ">
      <div className=' basis-44  bg-black h-auto' >
        <div>01</div>
      </div>
      <div className='post overflow-y-auto basis-5/6  bg-white h-screen'>
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

        <div className='h-[36rem]'>
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



        <div className='h-auto'>
          <p className='tracking-[6px] font-bold text-xs text-center pt-14 text-slate-600' >READ OUR BLOGS</p>
          <p className='font-bold text-4xl text-center pt-7 '>Latest news are on top all times</p>

          <div className='flex justify-evenly'>

            <div className='font-medium text-xs  pt-14 '>
              <div className="rounded-sm shadow-lg bg-white w-80">
                <img className="transition duration-700 ease-in-out hover:scale-95  rounded-t-lg" src="https://woxro.com/google-admin/img/uploads/97497742zbanner-communication-tips-for-startups.png" alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-base  font-bold ">The Complete Guide on Communication Tips for Startups
                  </h5>
                  <p className="text-gray-700 text-md pt-3 ">
                    Effective Communication tips for startups "The art of communication is the...
                  </p>
                </div>
              </div>
            </div>

            <div className='font-medium text-xs pt-14 '>
              <div className="rounded-sm shadow-lg bg-white w-80">
                <img className="transition duration-700 ease-in-out hover:scale-95  rounded-t-lg" src="https://woxro.com/google-admin/img/uploads/935730968web%203.0%20marketing%20strategy.png" alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-base  font-bold ">Web 3.0 Marketing Strategy | Digital Marketing Tips
                  </h5>
                  <p className="text-gray-700 text-md pt-3">
                    The only Web 3.0 marketing Strategy you need Ever had an incident where you ....
                  </p>
                </div>
              </div>
            </div>

            <div className='font-medium text-xs pt-14 '>
              <div className="rounded-sm shadow-lg bg-white w-80">
                <img className="transition duration-700 ease-in-out hover:scale-95  rounded-t-lg" src="https://woxro.com/google-admin/img/uploads/44958636importance-of-software-quality-in-business.png" alt="" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-base  font-bold ">
                    Top #4 Importance of software quality (July 2022)
                  </h5>
                  <p className="text-gray-700 text-md pt-3 ">
                    Top #4 Importance of Software Quality in Business The quality of your software ...
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className='flex justify-center py-14 '>
            <button className="bg-transparent  text-slate-600 font-semibold hover:text-slate-600  py-2 px-4 border border-slate-600  rounded">
              Read more blogs
            </button>
          </div>
        </div>


        <div className='statics'>
          <div className='text-white pt-12 pl-10'>

            <p className='font-bold text-white text-5xl leading-[4.5rem] '>
              Client<br />
              Statistics
            </p>
            <p className='text-white font-semibold pt-8 text-lg'>
              We meet clients wherever they are on their paths<br />
              to change in every industry across the globe.
            </p>
            <div className='flex justify-start pt-10 gap-36 text-xl'>
              <p>Web Development Projects</p>
              <p> Development Team</p>
            </div>
            <div className='flex justify-start pt-6 gap-64 text-7xl'>
              <p>324+</p>
              <p> 52+</p>
            </div>
          </div>

        </div>



        <div className='h-auto bg-white -mt-28 pb-10 '>
          <p className='tracking-[6px] font-bold text-xs text-center pt-14 text-slate-600' >READ OUR BLOGS</p>
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

        {/* footer 1 */}
        <div className="main  h-auto bg-zinc-800 grid grid-cols-1 divide-y-4 divide-white ">
          <div className='flex flex-row py-8'>
            <div className=' basis-1/2 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'> Explore</p>
              <div className='text-slate-400 text-sm leading-loose'>
                <p >Our Company</p>

                <p> Founder's Letter</p>
                <p> Accessibility</p>
                <p> Client Portal</p>
                <p> Woxzine e-magazine</p>
                <p> Get a quote</p>
                <p> Woxhost</p>
              </div>
            </div>
            <div className=' basis-1/2 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'>  Quick links </p>
              <div className='text-slate-400 text-sm leading-loose'>
                <p > Home</p>
                <p>About Us</p>
                <p>Services </p>
                <p>Technology </p>
                <p> Careers </p>
                <p>  Our Works</p>
                <p>Contact us</p>
              </div>
            </div>
            <div className=' basis-1/2 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'>   Services </p>
              <div className='text-slate-400 text-sm leading-loose'>
                <p >  Web Designing</p>
                <p>Web Application</p>
                <p> Mobile Applications</p>
                <p> Ecommerce Development </p>
                <p>  Digital Marketing </p>
                <p> AI & ML Development </p>
                <p>Hosting </p>
              </div>
            </div>
            <div className=' basis-1/2 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'>Support   </p>
              <div className='text-slate-400 text-sm leading-loose'>
                <p> COVID-19 Response</p>
                <p>Refund Policy</p>
                <p> Privacy Policy</p>
                <p>Terms of Service </p>
                <p>Payment Gateway </p>
                <p>FAQ </p>
                <p> Knowledge Base</p>
              </div>
            </div>
          </div>
          
         <div className='w-auto h-1 px-10 bg-slate-50'></div>
         
          <div className='flex flex-row py-8'>
            <div className=' basis-1/3 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'>  Office Address </p>
              <div className='text-slate-400 text-sm leading-loose'>
                <p >Leshore Business Park</p>
                <p> Thrissur 680004 </p>
                <p>  Kerala, India</p>  
              </div>
            </div>
            <div className=' basis-1/3 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'> Let's Talk </p>
              <div className='text-slate-400 text-sm leading-loose'>
               <p > Office : +91 487 2080 212</p>
                <p>  HR : +91 7994 468821</p>
                <p> Sales : +91 8606 588821 </p>
                <p>UAE : +971 5825 04982 </p>
              </div>
            </div>
            <div className=' basis-1/3 pl-6 leading-[2.5]' >
              <p className='text-slate-200 font-bold pb-2'>   Get connected with us </p>
              <div className='text-slate-400 text-sm leading-loose'>
                <p >  Web Designing</p>
                <p>Web Application</p>
                <p> Mobile Applications</p>
                
              </div>
            </div>

          </div>
        </div>
        

        <div className='py-5 flex justify-center text-gray-500 text-sm font-medium bg-black'>
          <p>  © 2016-2022 Woxro Technology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>

      </div>
      <div className='basis-44 bottom-0 bg-black h-auto ' >
        <button className="mt-[38rem] pl-8 bg-white  text-black font-semibold hover:text-black py-2 px-4 border border-whitw hover:border-transparent rounded">
         Chat with us🤳
        </button>
      </div>
    </div>
  );
}

export default App;
