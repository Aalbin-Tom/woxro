import React from 'react'

function ReadMore() {
    return (
        <div>
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



            
        </div>
    )
}

export default ReadMore
