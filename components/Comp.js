import React from 'react'
import Image from "next/image";

const Comp = () => {
  return (
      <section className="reative py-[50px] px-[5%] ">
          <div className="flex items-center justify-between md:flex-row flex-col ">
              <div className="md:w-[40%] w-full flex flex-col items-center md:items-start  justify-between mb-14">
                  <h1 className='md:text-4xl text-2xl py-1'>Stream Now or Download Now</h1>
                  <h1 className='md:text-4xl text-2xl py-3'>Explore Us More on Disney</h1>
                  <p className='text-[14px] mb-5 font-[200] sm:tracking-wide tracking-normal'>Stream on 4 Devices at Once or Download Your Favourites to Watch Later.With dozens 
                  of titles stunning 4K in which you can watch </p>
                  <button className="bg-blue-600 uppercase text-xl  font-extrabold py-3 px-6 w-[300px] rounded hover:bg-[#0485ee]">DOWNLOAD NOW</button>
              </div>

              <div className="md:w-[50%] w-[full]">
                  <Image
                      src="/images/Devices.png"
                      width="800"
                      height="700"
                      objectFit="cover"

                  />


              </div>
          </div>
      </section>
  )
}

export default Comp
