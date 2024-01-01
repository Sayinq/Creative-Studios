import React from 'react'


{/* Scrub GSAP animation like our website until 1024 where we switch to new animation component*/}
const WorkSection = () => {
    return (
        <section id="work-section" className="flex flex-col justify-between relative w-screen h-[450px] p-8 py-16">
            <div id="about-header" className="flex flex-col w-full h-fit text-5xl font-semibold italic">
                <span className="text-black">Our</span>
                <span className="text-[#148CEE]">Works</span>
            </div>
        </section>
    )
}

export default WorkSection