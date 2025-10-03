'use client';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link'

type SideMenuProps = {
    isOpen: boolean;
}


const SideMenu = ({ isOpen }: SideMenuProps) => {

    return (
        <div className={clsx("fixed top-18 left-0 x-full h-full w-full overscroll-contain bg-[#272525] text-white transform transition-transform duration-450 ease-in-out z-3", {
            "-translate-x-[-150%]": !isOpen,
            "translate-x-0": isOpen,
        })}>
            <Link href={'/'}>Om Mig</Link>
            <Link href={'/'}>Præstationer</Link>
            <Link href={'/'}>Sponsere</Link>
        </div>
    );
}

export default SideMenu;
