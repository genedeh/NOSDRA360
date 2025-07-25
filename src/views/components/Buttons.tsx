import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
    href: string;
    children: ReactNode;
    bgColor: string;
    hoverColor: string;
    textColor?: string;
    onClick?: () => void;
}

const Button = ({
    href,
    children,
    bgColor,
    hoverColor,
    textColor = 'text-white',
    onClick
}: ButtonProps)  => {
    return (
        <Link
            href={href}
            className={`flex items-center gap-2 ${bgColor} ${textColor} px-5 py-2 rounded-full transition-transform duration-200 hover:${hoverColor} hover:scale-105`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}


export default Button;