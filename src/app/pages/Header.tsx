"use client"
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const { isSignedIn } = useUser();
    const path = usePathname();

    return !path.includes('sign-up') && !path.includes('sign-in') &&  (
        <div className='p-3 fixed top-0 left-0 w-full z-50 bg-transparent'>
            <div className='flex items-center justify-between px-4 py-4 rounded-none backdrop-blur-sm bg-white/10'>
                <div className='flex items-center gap-2'>
                    <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.2551 1.61586C38.1803 0.653384 39.4368 0.112671 40.7452 0.112671C46.6318 0.112671 52.1793 0.112674 57.6424 0.112685C68.6302 0.112708 74.1324 13.9329 66.3629 22.0156L49.4389 39.6217C48.662 40.43 47.3335 39.8575 47.3335 38.7144V23.2076L49.2893 21.1729C50.8432 19.5564 49.7427 16.7923 47.5451 16.7923H22.6667L37.2551 1.61586Z" fill="url(#paint0_linear_5464_1221)"></path>
                        <path d="M32.7449 38.3842C31.8198 39.3467 30.5633 39.8874 29.2549 39.8874C23.3683 39.8874 17.8208 39.8874 12.3577 39.8874C1.36983 39.8873 -4.13236 26.0672 3.63721 17.9844L20.5612 0.378369C21.3381 -0.429908 22.6666 0.142547 22.6666 1.28562L22.6667 16.7923L20.7108 18.8271C19.1569 20.4437 20.2574 23.2077 22.455 23.2077L47.3335 23.2076L32.7449 38.3842Z" fill="url(#paint1_linear_5464_1221)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_5464_1221" x1="59" y1="2" x2="16" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#59FFB1"></stop>
                                <stop offset="0.510529" stopColor="#009CCC"></stop>
                                <stop offset="1" stopColor="#3A04FF"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_5464_1221" x1="59" y1="2" x2="16" y2="40" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#59FFB1"></stop>
                                <stop offset="0.510529" stopColor="#009CCC"></stop>
                                <stop offset="1" stopColor="#3A04FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h1 className={`${path.includes('pages')? "text-black font-bold text-lg": "text-white font-bold text-lg"}`}>Kraftedx Task</h1>
                </div>
                {isSignedIn ? (
                    <div className='flex items-center gap-5'>
                        <Link href={'/pages/dashboard'}>
                            <button className='cursor-pointer bg-white text-indigo-600 border-indigo-600 px-4 py-1 rounded-md'>Dashboard</button>
                        </Link>
                        <UserButton />
                    </div>
                ) : (
                    <SignInButton>
                        <button className='bg-indigo-600 text-white px-4 py-1 rounded-md cursor-pointer'>Get Started</button>
                    </SignInButton>
                )}
            </div>
        </div>
    )
}

export default Header
