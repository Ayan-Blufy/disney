import React from 'react'
import Image from "next/image";
const Banner = () => {
    return (
        <>

            <section className="reative py-[50px] px-[5%] ">
                <div className="flex items-center justify-between md:flex-row-reverse flex-col ">
                    <div className="md:w-[40%] w-full flex flex-col items-center md:items-start  justify-between mb-14">
                        <h1 className='md:text-3xl text-xl py-1'>Stream with Premier Access at the</h1>
                        <h1 className='md:text-3xl text-xl py-2'>Same day it's in theaters</h1>
                        <p className='text-[14px] mb-5 font-[100]'>Coming May 28.Get Premier Access to Cruella for $29.99 with a Disney Subscription and watch as many times as you like before it's available
                        to all Disney* Subscription at later date </p>
                        <button className="bg-blue-600 uppercase text-xl  font-extrabold py-3 px-6 w-[200px] rounded hover:bg-[#0485ee]">PREORDER</button>
                    </div>

                    <div className="md:w-[50%] w-[full]">
                        <Image
                            src="/images/jugle.jpg"
                            width="800"
                            height="700"
                            objectFit="cover"

                        />


                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner