import React from 'react'
import Image from 'next/image';
import menuLogo from '../../../public/images/menu-outline.svg';

const NavbarComp = () => {
    return (
        <header className="w-screen h-auto p-12">
            <nav className="absolute flex flex-row justify-between items-center top-0 left-0 w-screen h-fit bg-transparent p-8 z-20">
                <h2 className="text-black font-bold">Creative Studios</h2>
                <div className="w-8 h-8 cursor-pointer">
                    <Image src={menuLogo} />
                </div>
            </nav>
        </header>
    )
}

export default NavbarComp