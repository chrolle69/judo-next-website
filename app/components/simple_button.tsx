import clsx from 'clsx';
import React from 'react';

type Props = {
    rounded?: number;
    border?: number;
    text?: string;
    icon?: React.ReactNode;
}

// Define border classes mapping
const borderClasses: { [key: number]: string } = {
    1: 'border border-1',
    2: 'border border-2',
    3: 'border border-3',
    // Add more mappings as needed
};
const roundedClasses: { [key: number]: string } = {
    1: 'rounded-lg',
    2: 'rounded-xl',
    3: 'rounded-2xl',
    4: 'rounded-3xl',
    // Add more mappings as needed
};

const SimpleButton = ({ rounded, border, text, icon }: Props) => {
    border = border ?? 0;
    const roundedStyle = roundedClasses[rounded ?? 2] || '';
    const borderStyle = borderClasses[border];

    return (
        <button
            className={clsx(
                `px-6 py-3 border-black ${roundedStyle} transition-all`,
                border === 0 && 'hover:text-amber-600 duration-230 ',
                border > 0 && `${borderStyle} text-black hover:bg-black hover:text-white duration-300`
            )}>
            {text}
            {icon && <span className='inline-block align-middle ml-2'>{icon}</span>}
        </button>

    );
}

export default SimpleButton;
