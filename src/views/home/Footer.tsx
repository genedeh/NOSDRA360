import Link from "next/link";
import Image from "next/image";
import { FiMail, FiExternalLink } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="bg-gray-200 text-black py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Agency Info */}
                <div className="space-y-4">
                    {/* Logo Placeholder */}
                    <Image
                        src="/images/logo.png"
                        alt="NOSDRA Logo"
                        width={400}
                        height={400}
                        className="mt-3 mb-4 w-20 h-20 p-3 object-contain rounded-xl bg-black/5 backdrop-blur-xs border border-black/20 shadow-md"
                    />

                    <p className="text-sm text-black leading-relaxed">
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
                    <h4 className="text-xl font-semibold mb-6 text-black">Contact Us</h4>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                            <FiMail className=" text-black" />
                        </div>
                        <Link href="mailto:info@nosdra.gov.ng" className="text-black hover:text-gray-700 transition-colors">
                            info@nosdra.gov.ng
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                            <FiExternalLink className=" text-black" />
                        </div>
                        <Link href="https://environment.gov.ng" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                            Federal Ministry of Environment
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold mb-6 text-black">Quick Links</h4>
                    {[
                        "Emergency Response",
                        "Environmental Guidelines",
                        "Reports & Publications",
                        "Training Programs"
                    ].map((link, idx) => (
                        <p key={idx} className="text-sm text-black hover:text-gray-800 cursor-pointer">
                            {link}
                        </p>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Bottom Row */}
            <div className="text-center text-sm text-black space-y-1">
                <p>
                    © {new Date().getFullYear()} National Oil Spill Detection and Response Agency (NOSDRA). All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;