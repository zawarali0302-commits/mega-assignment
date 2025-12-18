
const HeaderComponent = () => {
    return (
        <div className="flex items-center justify-between flex-wrap w-full sticky top-0 z-10 py-4 font-semibold text-white bg-[#26273b] md:bg-[#141526]">
            <div className="shrink-0 ml-6">
                <span className="text-3xl">MEGA ASSIGNMENT</span>
            </div>

            <button id="nav-toggle" className="md:hidden p-2 mr-4 ml-6" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div id="nav-content" className="pl-6 w-full md:w-auto hidden md:block">
                <ul className="md:flex justify-around">

                    {['Home', 'Products', 'Services', 'About'].map((items) => (
                        <li className="mr-6 p-1 hover:text-blue-500"><a href="">{items}</a></li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default HeaderComponent
