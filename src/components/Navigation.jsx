'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation ({ navLinks }) {

    const pathName = usePathname();

    return (
        <>{
            navLinks.map((link) => {
                const isActive = pathName === link.href;

                return(
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActive ? 'active' : 's'}
                    >
                        {link.label}
                    </Link>
                )
            })  
        }</>
    )
}