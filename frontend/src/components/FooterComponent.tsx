
const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#141526] text-white pt-10 pb-6 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Brand Section */}
                <div className="flex flex-col gap-4">
                    <span className="text-2xl font-semibold tracking-tight">MEGA ASSIGNMENT</span>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Managing your customer relationships efficiently with our modern dashboard solutions. Built for speed and reliability.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-blue-400">Navigation</h3>
                    <ul className="space-y-2 text-gray-300">
                        {['Home', 'Products', 'Services', 'About'].map((item) => (
                            <li key={item} className="hover:text-blue-500 transition-colors">
                                <a href={`#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact/Support Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-blue-400">Support</h3>
                    <p className="text-gray-400 text-sm">
                        Lahore, Punjab, Pakistan<br />
                        Email: support@megaassignment.com<br />
                        Phone: +92 300 1234567
                    </p>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; {currentYear} MEGA ASSIGNMENT. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;