"use client";
import React, { useState, useRef } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FiArrowLeft, FiMail, FiPhone, FiChevronDown, FiCheck, FiAlertTriangle } from 'react-icons/fi'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IconEight } from '@/views/home/FeatureIcons';

const incidents = [
    { value: 'Oil Spill', label: 'Oil Spill' },
    { value: 'Gas Flare', label: 'Gas Flare' },
    { value: 'Pipeline Leak', label: 'Pipeline Leak' },
    { value: 'Water Contamination', label: 'Water Contamination' },
    { value: 'Air Pollution', label: 'Air Pollution' },
    { value: 'Other Environmental Issue', label: 'Other Environmental Issue' },
];

const Urgencies = [
    { value: 'High - Response within 24 hours', label: 'High - Response within 24 hours' },
    { value: 'Critical - Immediate Response Required', label: 'Critical - Immediate Response Required' },
    { value: 'Medium - Response within 72 hours', label: 'Medium - Response within 72 hours' },
    { value: 'Low - Routine inspection', label: 'Low - Routine inspection' },
];


const ReportIncidentPage = () => {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState(incidents[0]);
    const [selectedUrgencyRole, setSelectedUrgencyRole] = useState(Urgencies[0]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            console.log("Selected files:", files);
        }
    };


    return (
        <>
            <div className='min-h-screen bg-gray-50'>
                <div className='bg-white border-b shadow-sm'>
                    <div className='max-w-4xl mx-auto px-6 py-4 flex items-center space-x-4'>
                        <div className="flex justify-center items-center mt-4 text-sm">
                            <button
                                onClick={() => router.push('/')}
                                className="flex items-center gap-1 text-black cursor-pointer font-semibold text-sm border-1 border-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition"
                            >
                                <FiArrowLeft className="text-base" />
                                Back to Home
                            </button>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <Image
                                src="/images/logo.png"
                                alt="NOSDRA Logo"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            <div className=''>
                                <h3 className='text-xl text-gray-800 font-bold'>NOSDRAConnect</h3>
                                <p className='text-gray-600 text-sm'>Public Incident Reporting</p>
                            </div>
                        </div>
                    </div>
                </div>
                <main className='max-w-4xl mx-auto px-6 py-8'>
                    <div className='mb-8 text-center'>
                        <IconEight circle={true} />
                        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                            Report Environmental Incident
                        </h2>
                        <p className='text-gray-600'>
                            Help us protect Nigeria&apos;s environment by reporting oil spills and environmental incidents
                        </p>
                    </div>
                    <div className='rounded-lg border bg-card text-card-foreground shadow-xl'>
                        <div className='flex flex-col space-y-1.5 p-6'>
                            <h3 className='font-semibold  text-black text-xl text-center'>
                                Incident Report Form
                            </h3>
                        </div>
                        <div className='p-6 pt-0'>
                            <form className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div className="space-y-3">
                                        <label className='text-black text-sm font-semibold'>Full Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                            className="pl-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className='text-black text-sm font-semibold'>Phone Number *</label>
                                        <div className="relative">
                                            <FiPhone className="absolute top-3.5 left-3 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Enter your phone number"
                                                required
                                                className="pl-10 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className='text-black text-sm font-semibold'>Email Address</label>
                                    <div className="relative">
                                        <FiMail className="absolute top-3.5 left-3 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="pl-10 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className="text-sm text-black font-semibold block mb-1">Incident Type *</label>
                                        <div>
                                            <Listbox value={selectedRole} onChange={setSelectedRole}>
                                                <div className="relative">
                                                    <ListboxButton className="pl-4 pr-10 py-2 w-full h-12 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm text-gray-600">
                                                        {selectedRole.label}
                                                        <FiChevronDown className="absolute top-3.5 right-3 text-gray-400" />
                                                    </ListboxButton>

                                                    <ListboxOptions className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-20 max-h-60 overflow-auto">
                                                        {incidents.map((role, idx) => (
                                                            <ListboxOption
                                                                key={idx}
                                                                value={role}
                                                                className={({ active }) =>
                                                                    `cursor-pointer select-none relative py-2 pl-10 pr-4 text-sm ${active ? 'bg-gray-100 text-gray-700' : 'text-gray-700'
                                                                    }`
                                                                }
                                                            >
                                                                {({ selected }) => (
                                                                    <>
                                                                        <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                                                            {role.label}
                                                                        </span>
                                                                        {selected ? (
                                                                            <FiCheck className="absolute left-3 top-3 text-gray-500" />
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </ListboxOption>
                                                        ))}
                                                    </ListboxOptions>
                                                </div>
                                            </Listbox>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm text-black font-semibold block mb-1">Urgency Level *</label>
                                        <div>
                                            <Listbox value={selectedUrgencyRole} onChange={setSelectedUrgencyRole}>
                                                <div className="relative">
                                                    <ListboxButton className="pl-4 pr-10 py-2 w-full h-12 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm text-gray-600">
                                                        {selectedUrgencyRole.label}
                                                        <FiChevronDown className="absolute top-3.5 right-3 text-gray-400" />
                                                    </ListboxButton>

                                                    <ListboxOptions className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-20 max-h-60 overflow-auto">
                                                        {Urgencies.map((role, idx) => (
                                                            <ListboxOption
                                                                key={idx}
                                                                value={role}
                                                                className={({ active }) =>
                                                                    `cursor-pointer select-none relative py-2 pl-10 pr-4 text-sm ${active ? 'bg-gray-100 text-gray-700' : 'text-gray-700'
                                                                    }`
                                                                }
                                                            >
                                                                {({ selected }) => (
                                                                    <>
                                                                        <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                                                            {role.label}
                                                                        </span>
                                                                        {selected ? (
                                                                            <FiCheck className="absolute left-3 top-3 text-gray-500" />
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </ListboxOption>
                                                        ))}
                                                    </ListboxOptions>
                                                </div>
                                            </Listbox>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className='text-black text-sm font-semibold'>Incident Location *</label>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin absolute left-3 top-3 h-4 w-4 text-gray-400">
                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Provide detailed location (address, landmarks, GPS coordinates)"
                                            className="pl-10 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-black font-semibold block mb-1">Incident Description *</label>
                                    <div className="relative">
                                        <textarea
                                            placeholder="Provide detailed description of the incident, including what you observed, estimated size/severity, and any immediate actions taken"
                                            required
                                            className="pl-3 pr-4 py-2 w-full border h-30 border-gray-300 text-start text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-black font-semibold block mb-1">Supporting Evidence (Photos, Videos)</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-upload w-8 h-8 text-gray-400 mx-auto mb-2">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line>
                                        </svg>
                                        <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB each</p>
                                        <div className='mt-4'>
                                            <button
                                                type="button"
                                                onClick={handleClick}
                                                className="bg-white text-black border-gray-500 border-1 cursor-pointer px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/50 transition"
                                            >
                                                Choose Files
                                            </button>

                                            <input
                                                type="file"
                                                multiple
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center pt-6'>
                                <button
                                    type="submit"
                                    className="w-1/2 cursor-pointer h-12 text-sm mb-5 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 hover:bg-red-800 transition"
                                >
                                    Submit Access Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <FiAlertTriangle className="text-red-600 w-6 h-6" />
                            <div>
                                <h3 className="font-semibold text-red-800">Emergency Situations</h3>
                                <p className="text-sm text-red-700 mt-1">For immediate emergency response, please call our 24/7 hotline: <strong>0800-NOSDRA-1</strong> or contact local emergency services.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ReportIncidentPage