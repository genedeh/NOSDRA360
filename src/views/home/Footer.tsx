import Link from "next/link";
import Image from "next/image";
import { FiMail, FiExternalLink } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="bg-[#0B1727] text-white py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Agency Info */}
                <div className="space-y-4">
                    {/* Logo Placeholder */}
                    <Image
                        src="/images/logo.png"
                        alt="NOSDRA Logo"
                        width={200}
                        height={200}
                        className="mt-3 mb-4 w-20 h-20 p-3 object-contain rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 shadow-md"
                    />

                    <p className="text-sm text-gray-300 leading-relaxed">
                        National Oil Spill Detection and Response Agency - <br />
                        Protecting Nigeria&apos;s environment through proactive <br />
                        monitoring and rapid response.
                    </p>

                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                        <FiExternalLink />
                    </div>
                </div>

                {/* Contact Us */}
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-6 text-emerald-400">Contact Us</h4>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-3">
                            <FiMail className=" text-green-500" />
                        </div>
                        <Link href="mailto:info@nosdra.gov.ng" className="text-gray-300 hover:text-white transition-colors">
                            info@nosdra.gov.ng
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-3">
                            <FiExternalLink className=" text-green-500" />
                        </div>
                        <Link href="https://environment.gov.ng" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            Federal Ministry of Environment
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold mb-6 text-emerald-400">Quick Links</h4>
                    {[
                        "Emergency Response",
                        "Environmental Guidelines",
                        "Reports & Publications",
                        "Training Programs"
                    ].map((link, idx) => (
                        <p key={idx} className="text-sm text-gray-300 hover:text-white cursor-pointer">
                            {link}
                        </p>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Bottom Row */}
            <div className="text-center text-sm text-gray-400 space-y-1">
                <p>
                    © 2024 National Oil Spill Detection and Response Agency (NOSDRA). All rights reserved.
                </p>
                <p className="text-xs text-gray-600">Powered by Cadnetwork Enterprise</p>
            </div>
        </footer>
    );
}

export default Footer;