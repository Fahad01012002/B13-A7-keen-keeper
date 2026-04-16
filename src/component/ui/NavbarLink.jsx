'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";
import * as Icons from 'lucide-react';

const NavbarLink = ({ link }) => {

    const pathname = usePathname();
    const isActive = pathname === link.href;

    const IconComponent = Icons[link.icon];

    return (
        <div className=''>
            <Link 
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive 
                        ? 'bg-[#244d3f] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
                {IconComponent && <IconComponent size={18} />}
                {link.name}
            </Link>
        </div>
    );
};

export default NavbarLink;