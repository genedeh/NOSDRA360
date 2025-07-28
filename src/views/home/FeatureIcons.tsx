import { FiGlobe, FiAlertTriangle, FiShield, FiZap, FiUsers, FiFile } from 'react-icons/fi';
import React from 'react';

export const IconOne = () => (
    <button className="bg-green-100 p-4 rounded-xl hover:shadow-md transition">
        <FiGlobe className="text-black  text-3xl" />
    </button>
);

export const IconTwo = () => (
    <button className="bg-green-100 p-4 rounded-xl hover:shadow-md transition">
        <FiAlertTriangle className="text-black text-3xl" />
    </button>
);

export const IconThree = () => (
    <button className="bg-green-100 p-4 rounded-xl hover:shadow-md transition">
        <FiShield className="text-black text-3xl" />
    </button>
);

export const IconFour = () => (
    <button className="bg-green-100 p-4 rounded-xl hover:shadow-md transition">
        <FiZap className="text-black text-3xl" />
    </button>
);

export const IconFive = () => (
    <button className="bg-green-100 p-4 rounded-xl hover:shadow-md transition">
        <FiShield className="text-black text-3xl" />
    </button>
);

export const IconSix = () => (
    <button className="bg-blue-100 p-4 rounded-xl hover:shadow-md transition">
        <FiUsers className="text-blue-700 text-3xl" />
    </button>
);
export const IconSeven = () => (
    <button className="bg-purple-100 p-4 rounded-xl hover:shadow-md transition">
        <FiFile className="text-purple-700 text-3xl" />
    </button>
);
export const IconEight = ({ circle = false }: { circle?: boolean }) => (
    <button className={`bg-red-100 p-4 ${circle ? 'rounded-full' : 'rounded-xl'} hover:shadow-md transition`}>
        <FiAlertTriangle className="text-red-700 text-3xl" />
    </button>
);