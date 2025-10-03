'use client';

import React from 'react';
import clsx from 'clsx';

type BurgerMenuButtonProps = {
    isOpen?: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenuButton = ({ isOpen, setIsOpen }: BurgerMenuButtonProps) => {
    return (
        <button id="BurgerMenuButton" className="burger-btn"
            onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className='text-black' width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="25" height="2" fill="white"
                    className={clsx("transition-all duration-300 ", {
                        "transform translate-x-[7px] -translate-y-[3px] rotate-45": isOpen,
                    })} />
                <rect y="17" width="25" height="2" fill="white"
                    className={clsx("transition-all duration-300", {
                        "transform -translate-x-[10px] translate-y-[7px] -rotate-45": isOpen,
                    })} />
            </svg>
        </button>
    );
}

export default BurgerMenuButton;

/* .burger - btn svg rect {
    transition: all 0.3s ease;
}

.burger - btn.open.top {
    transform: translate(7px, -3px) rotate(45deg);
}

.burger - btn.open.bottom {
    transform: translate(-10px, 7px) rotate(-45deg);
}

.burger - btn {
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
    padding - right: 10px;
    align - content: flex - end;
    justify - content: flex - end;
} */