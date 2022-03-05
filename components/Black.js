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
            <div className="relative min-h-[calc(100vh-82px)]">
                <Image
                    src="/images/BlackPanther.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex  justify-end items-start">
                <div className="absolute flex flex-col space-y-3 top-1/2 md:top-1/2 w-[70%] justify-center items-start max-w-screen-sm  mx-auto p-8 -mt-16">

                    <h1 className='md:text-3xl text-2xl py-2'>Endless Entertainment</h1>
                    <p className='text-sm md:text-xl'>Disney comics,pixar adventures ,Marvel epics ,Star Wars</p>
                    <p className='text-sm md:text-xl'>National Geographic exploration and more</p>
                </div>
            </div>
        </section>
    )
}

export default Group
