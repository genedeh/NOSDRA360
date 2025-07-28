"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import {
    FiAlertTriangle,
    FiCalendar,
    FiClock,
    FiLogOut,
    FiSettings,
    FiUsers,
} from "react-icons/fi";
import { colorMap } from "@/constants";
const CARDS = [
    {
        title: "Incident Reports",
        description: "View and manage oil spill incident reports",
        icon: <FiAlertTriangle />,
        count: 24,
        change: "+3",
        color: "red",
    },
    {
        title: "Compliance Reports",
        description: "Generate and review compliance documentation",
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
                className="lucide lucide-file-text w-5 h-5 mr-2"
            >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
            </svg>
        ),
        count: 18,
        change: "+5",
        color: "blue",
    },
    {
        title: "Team Coordination",
        description: "View and manage oil spill incident reports",
        icon: <FiUsers />,
        count: 12,
        change: "+2",
        color: "emerald",
    },
    {
        title: "Scheduled Tasks ",
        description: "View upcoming monitoring activities",
        icon: <FiCalendar />,
        count: 8,
        change: "Due Today",
        color: "purple",
    },
];

const RECENTACTIVITY = [
    {
        title: "New incident report submitted",
        description: "Lagos Maritime - Oil spill detection",
        time: "2 hours ago",
        color: "red",
    },
    {
        title: "Compliance report generated",
        description: "Port Harcourt - Quarterly compliance",
        time: "1 day ago",
        color: "yellow",
    },
    {
        title: "Team meeting scheduled",
        description: "Weekly coordination meeting",
        time: "3 days ago",
        color: "emerald",
    },
];

const StaffDashboardPage = () => {
    const router = useRouter();
    return (
        <>
            <div className="min-h-screen bg-gray-900/70">
                <header className="bg-gray-900/70 border-b border-transparent shadow-lg w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-y-4">
                            {/* Logo + Title Section */}
                            <div className="flex items-center space-x-3 w-full md:w-auto justify-center md:justify-start">
                                <Image
                                    src="/images/logo.png"
                                    alt="NOSDRAConnect Logo"
                                    width={40}
                                    height={40}
                                    className="w-13 h-13 object-contain"
                                />
                                <div className="text-center md:text-left">
                                    <h1 className="text-xl font-bold  text-white">
                                        NOSDRAConnect
                                    </h1>
                                    <p className="text-sm text-white">Staff Portal</p>
                                </div>
                            </div>

                            {/* Buttons Section */}
                            <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-3 w-full md:w-auto">
                                {/* Department Dashboard Button */}
                                <button
                                    className="flex items-center justify-center gap-2 cursor-pointer h-10 px-4 py-2 text-sm font-semibold text-black bg-emerald-600 hover:bg-emerald-700 rounded-md transition"
                                    onClick={() => router.push("/depertment-section")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-building"
                                    >
                                        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                                        <path d="M9 22v-4h6v4" />
                                        <path d="M8 6h.01" />
                                        <path d="M16 6h.01" />
                                        <path d="M12 6h.01" />
                                        <path d="M12 10h.01" />
                                        <path d="M12 14h.01" />
                                        <path d="M16 10h.01" />
                                        <path d="M16 14h.01" />
                                        <path d="M8 10h.01" />
                                        <path d="M8 14h.01" />
                                    </svg>
                                    Department Dashboard
                                </button>

                                <button
                                    className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors 
                                                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                                                                    disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  hover:text-black
                                                                    bg-gray-700 text-white
                                                                    cursor-pointer
                                                                    h-10 px-4 py-2 flex items-center space-x-2 hover:bg-red-100 hover:border-red-200"
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
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Welcome to Staff Dashboard
                        </h2>
                        <p className="text-white">
                            Monitor operations, manage reports, and coordinate response
                            activities.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {CARDS.map((card, index) => (
                            <div
                                key={index}
                                className="rounded-lg border-transparent bg-gray-800/50 text-card-foreground shadow-sm hover:shadow-lg hover:shadow-gray-600 transition-all duration-300 cursor-pointer border-l-4 border-l-emerald-500"
                            >
                                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                    <h3 className="tracking-tight text-sm font-medium text-white">
                                        {card.title}
                                    </h3>
                                    <div
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${card.color}-100 text-${card.color}-600`}
                                    >
                                        {card.icon}
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="flex items-baseline space-x-2">
                                        <div className="text-2xl font-bold text-white">
                                            {card.count}
                                        </div>
                                        <span className="text-sm font-medium text-emerald-500">
                                            {card.change}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white mt-1">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="rounded-lg border-transparent bg-card text-card-foreground shadow-lg">
                            <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-lg">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-3">
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
                                        className="lucide lucide-chart-column w-5 h-5"
                                    >
                                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                        <path d="M18 17V9"></path>
                                        <path d="M13 17V5"></path>
                                        <path d="M8 17v-3"></path>
                                    </svg>
                                    Recent Activity
                                </h3>
                            </div>
                            <div className="p-6 bg-gray-800/50 rounded-b-lg">
                                <div className="space-y-4">
                                    {RECENTACTIVITY.map((activity, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg border-l-4 ${colorMap[activity.color] || "bg-gray-100 text-gray-600"
                                                }`}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-black">
                                                        {activity.title}
                                                    </h4>
                                                    <p className="text-sm text-black">
                                                        {activity.description}
                                                    </p>
                                                </div>
                                                <span className="text-xs text-black flex items-center">
                                                    <FiClock className="mr-2" /> {activity.time}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border-transparent bg-card text-card-foreground shadow-lg">
                            <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight gap-3 flex items-center space-x-2">
                                    <FiSettings /> Quick Actions
                                </h3>
                            </div>
                            <div className="p-6 bg-gray-800/50 rounded-b-lg">
                                <div className="space-y-4">
                                    <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-left justify-start">
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
                                            className="lucide lucide-building w-5 h-5 mr-3"
                                        >
                                            <rect
                                                width="16"
                                                height="20"
                                                x="4"
                                                y="2"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                            <path d="M9 22v-4h6v4"></path>
                                            <path d="M8 6h.01"></path>
                                            <path d="M16 6h.01"></path>
                                            <path d="M12 6h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M16 10h.01"></path>
                                            <path d="M16 14h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M8 14h.01"></path>
                                        </svg>
                                        Access Department Dashboard
                                    </button>
                                    <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-left justify-start">
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
                                            className="lucide lucide-file-text w-5 h-5 mr-3"
                                        >
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                        </svg>
                                        Generate Report
                                    </button>
                                    <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-white text-black hover:text-accent-foreground h-10 px-4 w-full py-3 text-left justify-start hover:bg-blue-50">
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
                                            className="lucide lucide-calendar w-5 h-5 mr-3"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                        Schedule Inspection
                                    </button>
                                    <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-white text-black hover:text-accent-foreground h-10 px-4 w-full py-3 text-left justify-start hover:bg-purple-50">
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
                                            className="lucide lucide-users w-5 h-5 mr-3"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        Send Notification
                                    </button>
                                    <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-white text-black hover:text-accent-foreground h-10 px-4 w-full py-3 text-left justify-start hover:bg-green-50">
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
                                            className="lucide lucide-trending-up w-5 h-5 mr-3"
                                        >
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                            <polyline points="16 7 22 7 22 13"></polyline>
                                        </svg>
                                        View Analytics
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default StaffDashboardPage;
