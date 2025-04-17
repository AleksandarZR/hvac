import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Properties {
    href: string;
    label: string;
}

const SubMenuItemLink = ({ href, label }: Properties): JSX.Element => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <Link
            href={href}
            className={
                isActive(href)
                    ? "block p-2 border-y-16 text-xl text-color7 font-extrbold"
                    : "block p-2 border-y-16 text-xl no-underline"
            }
        >
            {label}
        </Link>
    );
}

export default SubMenuItemLink;