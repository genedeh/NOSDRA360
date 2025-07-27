"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    FiAlertTriangle,
    FiAlignJustify,
    FiBook,
    FiBookOpen,
    FiCamera,
    FiLogOut,
    FiMonitor,
    FiPaperclip,
    FiPhone,
    FiShield,
    FiShoppingCart,
    FiSpeaker,
    FiUsers,
} from "react-icons/fi";

const DEPARTMENTS = [
    {
        name: "Procurement",
        description: "Purchase orders, vendor management, contract negotiations",
        icon: <FiShoppingCart className="w-8 h-8" />,
        color: "blue",
    },
    {
        name: "Audit",
        description: "Internal audits, compliance reviews, financial oversight",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-search w-8 h-8"
            >
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path>
                <path d="m9 18-1.5-1.5"></path>
                <circle cx="5" cy="14" r="3"></circle>
            </svg>
        ),
        color: "purple",
    },
    {
        name: "Legal",
        description: "Legal compliance, contract reviews, litigation support",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scale w-8 h-8"
            >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
            </svg>
        ),
        color: "gray",
    },
    {
        name: "ICT",
        description: "IT infrastructure, system maintenance, digital solutions",
        icon: <FiMonitor className="w-8 h-8" />,
        color: "emerald",
    },
    {
        name: "Human Resources",
        description: "Staff management, recruitment, training programs",
        icon: <FiUsers className="w-8 h-8" />,
        color: "orange",
    },
    {
        name: "Public Affairs",
        description: "Media relations, public engagement, communications",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-megaphone w-8 h-8"
            >
                <path d="m3 11 18-5v12L3 14v-3z"></path>
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
            </svg>
        ),
        color: "pink",
    },
    {
        name: "Finance & Accounts",
        description: "Budget management, financial reporting, expenditure tracking",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calculator w-8 h-8"
            >
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <line x1="8" x2="16" y1="6" y2="6"></line>
                <line x1="16" x2="16" y1="14" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
            </svg>
        ),
        color: "emerald",
    },
    {
        name: "Environmental Monitoring",
        description:
            "Environmental assessments, data collection, compliance monitoring",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-leaf w-8 h-8"
            >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
        ),
        color: "teal",
    },
    {
        name: "Oil Spill Detection & Response",
        description:
            "Incident response, emergency coordination, cleanup operations",
        icon: <FiAlertTriangle className="w-8 h-8" />,
        color: "red",
    },
    {
        name: "Press & Protocol",
        description: "Event management, protocol coordination, media coverage",
        icon: <FiCamera className="w-8 h-8" />,
        color: "indigo",
    },
    {
        name: "Planning, Policy & Research",
        description: "Strategic planning, policy development, research initiatives",
        icon: <FiBookOpen className="h-8 w-8" />,
        color: "yellow",
    },
    {
        name: "Zonal Location",
        description: "Regional coordination, field operations, stakeholder liaison",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-8 h-8"
            >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
        color: "cyan",
    },
    {
        name: "Anti-Corruption / SERVICOM",
        description: "Integrity monitoring, ethics compliance, service quality",
        icon: <FiShield className="w-8 h-8" />,
        color: "purple",
    },
];

const DepeatmentSectionPage = () => {
    const router = useRouter();
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <header className="bg-white border-b shadow-lg">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/images/logo.png"
                                    alt="NOSDRA360 Logo"
                                    width={40}
                                    height={40}
                                    className="h-4 w-auto"
                                />
                                <div>
                                    <h1 className="text-xl font-bold text-gray-800">NOSDRA360</h1>
                                    <p className="text-sm text-gray-600">Departement Section</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button
                                    className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors 
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                                    disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground
                                    bg-white text-gray-700
                                    cursor-pointer
                                    h-10 px-4 py-2 flex items-center space-x-2 hover:bg-red-50 hover:border-red-200"
                                    onClick={() => router.push("/")}
                                >
                                    <FiLogOut /> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto px-6 py-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Select Your Department
                        </h2>
                        <p className="text-gray-600">
                            Choose your department to access specialized tools and workflows.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {DEPARTMENTS.map((dept, index) => (
                            <div
                                key={index}
                                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-l-emerald-500"
                            // onClick={() => router.push(`/departments/${dept.name.toLowerCase()}`)}
                            >
                                <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-${dept.color}-100 text-${dept.color}-600`}
                                    >
                                        {dept.icon}
                                    </div>
                                    <h3 className="tracking-tight text-lg font-semibold text-gray-800">
                                        {dept.name}
                                    </h3>
                                </div>
                                <div className="p-6 pt-0 text-center">
                                    <p className="text-sm text-gray-600 mb-4">
                                        {dept.description}
                                    </p>
                                    <button className="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                        Access Dashboard
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default DepeatmentSectionPage;
