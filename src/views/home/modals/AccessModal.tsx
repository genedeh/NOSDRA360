import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiX, FiCheck, FiChevronDown, FiLock as FiLockIcon } from "react-icons/fi";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import ForgotPasswordModal from "./ForgotPasswordModal";
import RequestAccessModal from "./RequestAccessModal";
import { useRouter } from "next/navigation";

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
    const [isShowForgotPasswordModal, setIsShowForgotPasswordModal] = useState(false);
    const [isShowRequestAccessModal, setIsShowRequestAccessModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignIn = async () => {
        setLoading(true);
        // Simulate processing
        setTimeout(() => {
            setLoading(false);
            if (selectedRole.value === '') {
                router.push('/staff-dashboard');
            } else if (selectedRole.value === 'administrator') {
                router.push('/admin-dashboard');
            }
        }, 5000);
    };


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-xl w-full max-w-md p-6 relative shadow-lg max-h-[90vh] ">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-shadow-white cursor-pointer"
                >
                    <FiX size={20} />
                </button>

                <div className="flex justify-center">
                    <div className="bg-emerald-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <FiLockIcon className="text-black text-2xl" />
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-emerald-600 text-start mb-1">
                    NOSDRAConnect Access
                </h2>
                <p className="text-sm text-white text-start mb-6">
                    Secure access to environmental oversight platform
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="text-sm text-white font-semibold block mb-1">Email Address</label>
                        <div className="relative">
                            <FiMail className="absolute top-3.5 left-3 text-white" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-white font-semibold block mb-1">Password</label>
                        <div className="relative">
                            <FiLock className="absolute top-3.5 left-3 text-white" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                                className="pl-10 pr-10 py-2 w-full border h-12 border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                            />

                            <div
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute top-3.5 right-3 text-white cursor-pointer"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-white font-semibold block mb-1">Role</label>
                        <div className="relative">
                            <FiUser className="absolute top-3.5 left-3 text-white z-10" />
                            <Listbox value={selectedRole} onChange={setSelectedRole}>
                                <div className="relative">
                                    <ListboxButton className="pl-10 pr-10 py-2 w-full h-12 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-white">
                                        {selectedRole.label}
                                        <FiChevronDown className="absolute top-3.5 right-3 text-gray-400" />
                                    </ListboxButton>

                                    <ListboxOptions className="absolute mt-1 w-full bg-gray-900 border border-gray-200 rounded-md shadow-md z-20 max-h-60 overflow-auto">
                                        {roles.map((role, idx) => (
                                            <ListboxOption
                                                key={idx}
                                                value={role}
                                                className={({ active }) =>
                                                    `cursor-pointer select-none relative py-2 pl-10 pr-4 text-sm ${active ? 'bg-emerald-100 text-emerald-700' : 'text-white'
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

                    <button
                        type="submit"
                        disabled={loading}
                        onClick={handleSignIn}
                        className={`w-full mb-5 shadow-lg text-white py-2 rounded-lg font-semibold transition ${loading ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-800 hover:opacity-90'
                            }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                                Signing in...
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                <div className="flex justify-between items-center mt-4 text-sm">
                    <button className="text-emerald-500 font-semibold text-sm" onClick={() => setIsShowForgotPasswordModal(true)}>Forgot Password?</button>
                    <button className="text-emerald-500 font-semibold text-sm" onClick={() => setIsShowRequestAccessModal(true)}>Request Access</button>
                </div>
            </div>
            {isShowForgotPasswordModal && <ForgotPasswordModal onClose={() => setIsShowForgotPasswordModal(false)} />}
            {isShowRequestAccessModal && <RequestAccessModal onClose={() => setIsShowRequestAccessModal(false)} />}
        </div>
    );
}

export default AccessModal;