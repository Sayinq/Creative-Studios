import React from 'react'

const AboutSection = () => {
    return (
        <section id="about-section" className="flex flex-col justify-between relative w-screen h-[450px] bg-black p-8 py-16">
            <div id="about-header" className="flex flex-col w-full h-fit text-5xl font-semibold">
                <span className="text-white">Turn vision</span>
                <span className="italic text-[#148CEE]">into reality</span>
            </div>
            <div id="about-desc" className="w-full h-fit text-white text-xl">
                <p>Whether you're looking to increase brand awareness, drive sales, or build customer loyalty, —
                    we can help you create digital experiences that achieve your goals.
                </p>
            </div>
        </section>
    )
}

export default AboutSection