import React from 'react'
import Image from 'next/image';

import spikeySVG from '../../../public/images/360spikes.svg';

const HeroSection = () => {
    return (
        <section id="hero-section" className="flex top-0 left-0 w-screen h-screen z-10">
            <div id="hero-wrapper" className="flex flex-col justify-center items-center w-full h-full gap-y-8 z-10 px-8">
                <div id="hero-text-col" className="flex flex-col items-center justify-center w-full h-fit font-black text-5xl z-10 uppercase">

                    <span><span className="text-[#d2d2d2]">Come</span> up</span>
                    <span>with <span className="text-[#d2d2d2]">bold</span></span>
                    <span className="flex flex-row items-center gap-x-2"> 
                        <span className="text-[#d2d2d2]">New</span> 
                        <Image src={spikeySVG} className="w-8 h-8"/>  
                        ideas
                    </span>

                </div>
                <div id="hero-desc" className="flex justify-center items-center text-center">
                    <p className="text-sm">We create powerful brands that leave a lasting impression. We help brands tell their stories and connect with their audiences.</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection