import Image from 'next/image';

const work = () => {
    return (
        <div className="p-10 lg:p-20 text-xl">
            <h1 className="text-4xl font-bold pb-5">Works</h1>
            <p >I work on the front end part of the web application for compaines. Most of my works are contractual
                basis. I work both as a frontend developer of the team or lead the team of frontend developers.
            </p>
            <p className="pt-5">
                As a developer I have worked from Startups to well established fintech compaines. I have some projects under NDA which
                I can't share but here are some of my favourite projects done for my clients
            </p>

            <h1 className="text-2xl font-bold pt-5">Benefited By My Services</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                <Image
                    src="/dukaanpro.svg"
                    alt="Picture of the author"
                    width={200}
                    height={20}
                />
            </div>
        </div>
        // I have experience
        // on working from scratch to deployment of an application. Moreover, I have experience on working from the middle of
        // the development process to fix bugs or add features.
    )
}

export default work
