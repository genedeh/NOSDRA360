import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    bgColor: string;
    hoverColor: string;
    textColor?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    bgColor,
    hoverColor,
    textColor = 'text-white',
    onClick
}: ButtonProps)  => {
    return (
        <button
            className={`flex items-center gap-2 cursor-pointer ${bgColor} ${textColor} px-5 py-2 rounded-full transition-transform duration-200 hover:${hoverColor} hover:scale-105`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


export default Button;