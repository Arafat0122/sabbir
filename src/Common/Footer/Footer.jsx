import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 md:px-20 pt-16 pb-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Mission */}
                <div>
                    <img src="/DigitalCrafted_Logo_HR_Dark.png" alt="DigitalCrafted Logo" className="h-12 mb-4" />
                    <p className="text-sm text-gray-300">
                        Empowering businesses with powerful digital content and growth strategies.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-primary">Home</Link></li>
                        <li><Link to="/our-work" className="hover:text-primary">Our Work</Link></li>
                        <li><Link to="/service" className="hover:text-primary">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">About Us</h4>
                    <p className="text-sm text-gray-300">
                        We’re not just editors — we’re storytellers, marketers, and digital builders. As we grow, we’re expanding into SEO, social media, YouTube growth, and web development.
                    </p>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
                    <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter to get the latest insights & offers.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 rounded-lg text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} DigitalCrafted. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;