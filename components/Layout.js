import MobileNavbar from './Navbar/MobileNavbar';

const Layout = ({ children }) => {
    return (
        <div className="font-br-font bg-br-primary h-screen	p-2 lg:px-8 lg:py-12 flex items-stretch ">
            <div className="bg-white rounded-lg shadow-br-shadow w-full flex items-stretch">
                <MobileNavbar></MobileNavbar>
                {children}
            </div>
        </div>
    )
}

export default Layout
