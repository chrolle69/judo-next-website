'use client';
import { useEffect } from "react";
import React from 'react';
import BurgerMenuButton from './burger_menu_button';
import SideMenu from './side_menu';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })

    return (
        <header className='flex justify-between items-center w-full min-h-20 max-h-40 px-6 bg-[#272525]'>
            <h4 className="mx-auto text-sm text-white h-fit font-heading font-bold">Celina Guldbrandsen</h4>
            <BurgerMenuButton setIsOpen={setIsOpen} isOpen={isOpen}></BurgerMenuButton>
            <SideMenu isOpen={isOpen}></SideMenu>
        </header>

    );
}

export default Header;
