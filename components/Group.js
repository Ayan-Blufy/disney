import React from 'react'
import Image from "next/image";
import Head from "next/head";

const Group = () => {
    return (
        <section className="relative">
            <Head>
                <title>Log in | Disney+</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative min-h-[calc(100vh-72px)]">
                <Image
                    src="/images/group.png"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex justify-start items-start">
                <div className="absolute flex flex-col space-y-3 top-1/4 md:top-1/3 w-full justify-center items-start max-w-screen-sm mx-auto md:mx-[100px] p-8 -mt-16">

                    <h1 className='md:text-3xl text-xl py-2'>Virtual Movie Nights with</h1>
                    <h1 className='md:text-3xl text-xl py-2'>Group Watch</h1>
                    <li className='text-xl'>Watch together ,even when apart</li>
                    <li className='text-xl' > Stream with upto 3 friends</li>
                    <li className='text-xl'>Pause, rewind, react together</li>
                    <li className='text-xl'>Easy setup and shring</li>
                </div>
            </div>
        </section>
    )
}

export default Group
