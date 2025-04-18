'use client'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import InteractiveBubble from './InteractiveGradient'

const LandingPage = () => {
    const { isSignedIn } = useUser();
    return (
        <>
            <section>
                <div className="absolute inset-0 -z-10">
                    <InteractiveBubble />
                </div>

                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Welcome to Landing Page!!

                            <span className="sm:block"> Lorem ipsum dolor sit. </span>
                        </h1>

                        <p className="text-white font-bold mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero quod ex mollitia sint consequatur.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {isSignedIn ? (
                                <Link href="/pages/dashboard">
                                    <button className="cursor-pointer block w-full rounded border-yellow-600 border-2 bg-yellow-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-400 focus:outline-white focus:ring active:text-opacity-75 sm:w-auto">
                                        Let&apos;s Go!!
                                    </button>
                                </Link>
                            ) : (
                                <SignInButton>
                                    <button className=" cursor-pointer block w-full rounded border-yellow-600 border-2 bg-yellow-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-400 focus:outline-white focus:ring active:text-opacity-75 sm:w-auto">
                                        Let&apos;s Go!!
                                    </button>
                                </SignInButton>
                            )}

                            <a
                                className="cursor-pointer block w-full rounded border-2 border-yellow-600 px-12 py-3 text-sm font-medium text-yellow-400 hover:bg-yellow-400 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default LandingPage;
