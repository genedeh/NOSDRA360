"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';

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
            </div>
        </>
    )
}

export default DepeatmentSectionPage