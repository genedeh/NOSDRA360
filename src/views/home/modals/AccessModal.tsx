import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiX, FiCheck, FiChevronDown, FiLock as FiLockIcon } from "react-icons/fi";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import ForgotPasswordModal from "./ForgotPasswordModal";

const roles = [
    { value: '', label: 'Select your role' },
    { value: 'administrator', label: 'Administrator' },
    { value: 'director_general', label: 'Director General' },
    { value: 'department_officer', label: 'Department Officer' },
    { value: 'auditor', label: 'Auditor' },
    { value: 'field_officer', label: 'Field Officer' },
];

const AccessModal = ({ onClose }: { onClose: () => void }) => {
    const [selectedRole, setSelectedRole] = useState(roles[0]);
    const [showPassword, setShowPassword] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <FiX size={20} />
                </button>

                {/* Lock Icon */}
                <div className="flex justify-center">
                    <div className="bg-emerald-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <FiLockIcon className="text-white text-2xl" />
                    </div>
                </div>

                {/* Header */}
                <h2 className="text-xl font-semibold text-emerald-600 text-start mb-1">
                    NOSDRA360 Access
                </h2>
                <p className="text-sm text-gray-500 text-start mb-6">
                    Secure access to environmental oversight platform
                </p>

                {/* Form */}
                <form className="space-y-6">
                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Email Address</label>
                        <div className="relative">
                            <FiMail className="absolute top-3.5 left-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Password</label>
                        <div className="relative">
                            {/* Lock Icon */}
                            <FiLock className="absolute top-3.5 left-3 text-gray-400" />

                            {/* Password Input */}
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                                className="pl-10 pr-10 py-2 w-full border h-12 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />

                            {/* Toggle Icon */}
                            <div
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute top-3.5 right-3 text-gray-400 cursor-pointer"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </div>
                        </div>
                    </div>

                    {/* Role Dropdown */}
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Role</label>
                        <div className="relative">
                            <FiUser className="absolute top-3.5 left-3 text-gray-400 z-10" />
                            <Listbox value={selectedRole} onChange={setSelectedRole}>
                                <div className="relative">
                                    <ListboxButton className="pl-10 pr-10 py-2 w-full h-12 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-600">
                                        {selectedRole.label}
                                        <FiChevronDown className="absolute top-3.5 right-3 text-gray-400" />
                                    </ListboxButton>

                                    <ListboxOptions className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-20 max-h-60 overflow-auto">
                                        {roles.map((role, idx) => (
                                            <ListboxOption
                                                key={idx}
                                                value={role}
                                                className={({ active }) =>
                                                    `cursor-pointer select-none relative py-2 pl-10 pr-4 text-sm ${active ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700'
                                                    }`
                                                }
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                                            {role.label}
                                                        </span>
                                                        {selected ? (
                                                            <FiCheck className="absolute left-3 top-3 text-emerald-500" />
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

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full mb-5 shadow-lg bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 hover:bg-emerald-800 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer Links */}
                <div className="flex justify-between items-center mt-4 text-sm">
                    <button className="text-emerald-500 font-semibold text-sm" onClick={() => setIsShowPassword(true)}>Forgot Password?</button>
                    <button className="text-emerald-500 font-semibold text-sm">Request Access</button>
                </div>
            </div>
            {isShowPassword && <ForgotPasswordModal onClose={() => setIsShowPassword(false)} />}
        </div>
    );
}

export default AccessModal;