import Link from 'next/link';
import { useState } from 'react';

const MobileNavbar = () => {

    const [showNavbar, setShowNavBar] = useState(false);

    return (
        <>
            <div className="fixed right-10 top-10 z-20">
                <button onClick={() => setShowNavBar(!showNavbar)} className="navButton ">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="frLine" className={showNavbar ? 'showNavFr' : ''} d="M0 1H30" stroke="black" strokeWidth="2" strokeMiterlimit="20" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="sdLine" className={showNavbar ? 'showNavSd' : ''} d="M0 29H30" stroke="black" strokeWidth="2" strokeMiterlimit="20" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {showNavbar && <div className="bg-br-dark flex items-center justify-center fixed inset-0 flex-col font-semibold z-10">
                <div className="nav-link"><Link href="/">Home</Link></div>
                <div className="nav-link"><Link href="/">About</Link></div>
                <div className="nav-link"><Link href="/">Works</Link></div>
                <div className="nav-link"><Link href="/">Contact</Link></div>
            </div>}
        </>
    )
}

export default MobileNavbar
