import { FiMail, FiX, FiArrowLeft } from "react-icons/fi";

const ForgotPasswordModal = ({ onClose }: { onClose: () => void }) => {

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <FiX size={20} />
                </button>

                <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <FiMail className="text-white text-2xl" />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-blue-600 text-start mb-5">
                    Reset Password
                </h2>

                <form className="space-y-6">
                    <div className="text-center text-gray-600 mb-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm">Enter your email address and we&apos;ll send you a secure link to reset your password.</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 font-semibold block mb-1">Email Address</label>
                        <div className="relative">
                            <FiMail className="absolute top-3.5 left-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="pl-10 pr-4 py-2 w-full border h-12 border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="w-full h-12 text-sm mb-5 shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 hover:bg-blue-800 transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="flex justify-center items-center mt-4 text-sm">
                    <button
                        className="flex items-center gap-1 text-blue-500 font-semibold text-sm"
                        onClick={onClose}
                    >
                        <FiArrowLeft className="text-base" />
                        Back to Sign in
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ForgotPasswordModal;