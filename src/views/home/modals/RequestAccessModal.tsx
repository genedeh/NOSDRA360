import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import { FiMail, FiX, FiUser, FiPhone, FiHome, FiChevronDown, FiCheck } from "react-icons/fi";

const roles = [
    { value: '', label: 'Select your role' },
    { value: 'administrator', label: 'Administrator' },
    { value: 'staff', label: 'Staff' },
    { value: 'department_officer', label: 'Department Officer' },
    { value: 'auditor', label: 'Auditor' },
    { value: 'field_officer', label: 'Field Officer' },
];

const RequestAccessModal = ({ onClose }: { onClose: () => void }) => {
    const [selectedRole, setSelectedRole] = useState(roles[0]);


    return (
        <div className="fixed inset-0 bg-black/80 flex items-start justify-center py-12 z-50">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <FiX size={20} />
                </button>

                <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-8 h-8 text-white">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                        </svg>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-purple-600 text-start mb-5">
                    Request System Access
                </h2>

                <form className="space-y-6">
                    <div className="text-center text-gray-600 mb-6 p-4 bg-purple-50 rounded-lg">
                        <p className="text-sm">Fill out this form to request access to NOSDRA360 platform.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-500 font-semibold block mb-1">Full Name *</label>
                            <div className="relative">
                                <FiUser className="absolute top-3.5 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-500 font-semibold block mb-1">Phone Number *</label>
                            <div className="relative">
                                <FiPhone className="absolute top-3.5 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    required
                                    className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Official Email Address *</label>
                        <div className="relative">
                            <FiMail className="absolute top-3.5 left-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your official email"
                                required
                                className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Organization/Department *</label>
                        <div className="relative">
                            <FiHome className="absolute top-3.5 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Enter your organization or department"
                                required
                                className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Requested Role *</label>
                        <div className="relative">
                            <FiUser className="absolute top-3.5 left-3 text-gray-400 z-10" />
                            <Listbox value={selectedRole} onChange={setSelectedRole}>
                                <div className="relative">
                                    <ListboxButton className="pl-10 pr-10 py-2 w-full h-12 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-600">
                                        {selectedRole.label}
                                        <FiChevronDown className="absolute top-3.5 right-3 text-gray-400" />
                                    </ListboxButton>

                                    <ListboxOptions className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-20 max-h-60 overflow-auto">
                                        {roles.map((role, idx) => (
                                            <ListboxOption
                                                key={idx}
                                                value={role}
                                                className={({ active }) =>
                                                    `cursor-pointer select-none relative py-2 pl-10 pr-4 text-sm ${active ? 'bg-purple-100 text-purple-700' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                                            {role.label}
                                                        </span>
                                                        {selected ? (
                                                            <FiCheck className="absolute left-3 top-3 text-purple-500" />
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
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Justification *</label>
                        <div className="relative">
                            <textarea
                                placeholder="Please provide a brief justification for why you need access to this system, including your role and responsibilities."
                                required
                                className="pl-10 pr-4 py-2 w-full border h-30 border-gray-300 text-start text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>
                    </div>


                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full h-12 text-sm mb-5 shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 hover:bg-purple-800 transition"
                    >
                        Submit Access Request
                    </button>
                </form>

                <div className="text-xs text-gray-500 text-center p-3 bg-gray-50 rounded-lg">
                    <p>Your request will be reviewed by the system administrator. You will receive an email notification regarding the status of your request.</p>
                </div>
            </div>
        </div>
    );
}

export default RequestAccessModal;