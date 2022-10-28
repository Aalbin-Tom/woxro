import React from 'react'
import Clients from './Clients'
import Footer from './Footer'
import Heading from './Heading'
import ReadMore from './ReadMore'
import RecentWorks from './RecentWorks'
import Service from './Service'
import WhyWoxro from './WhyWoxro'

function Start() {
    return (
        <div>
            <div className="main flex flex-row ">
                <div className=' basis-44  bg-black h-auto' >
                    <div>01</div>
                </div>
                <div className='post overflow-y-auto basis-5/6  bg-white h-screen'>
                    <Heading />
                    <Service />
                    <RecentWorks />
                    <Clients />
                    <ReadMore />
                    <WhyWoxro />
                    <Footer/>
                </div>
                <div className='basis-44 bottom-0 bg-black h-auto ' >
                    <button className="mt-[38rem] pl-8 bg-white  text-black font-semibold hover:text-black py-2 px-4 border border-whitw hover:border-transparent rounded">
                        Chat with us🤳
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Start
