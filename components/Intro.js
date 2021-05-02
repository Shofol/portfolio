import React from 'react'

const Intro = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full px-10 lg:p-20">
            <div className="col-span-1"></div>
            <div className="col-span-1 grid content-center justify-center ">
                <h1 className="text-4xl font-bold">Hi,
                    I'm Shofol <span >&#128522;</span></h1>
                <h2 className="text-2xl pt-5">A Freelance Frontend Developer. I build performant,
                    optimized and elegant websites
                    and web UIs. Providing excellent user experience through solving
                    technical and business problems is my main focus of work.</h2>
            </div>
        </div>
    )
}

export default Intro
