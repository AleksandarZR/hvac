import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Properties {
    href: string;
    label: string;
    onClickHandler?: any;
}

const MenuItemLink = ({ href, label, onClickHandler }: Properties): JSX.Element => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const linkClicked = () => {
        if (onClickHandler) {
            onClickHandler();
        }
    }

    return (
        <Link
            href={href}
            onClick={linkClicked}
            className={
                isActive(href)
                    ? "block p-2 border-y-16 text-xl text-color7"
                    : "block p-2 border-y-16 text-xl no-underline"
            }
        >
            {label}
        </Link>
    );
}

export default MenuItemLink;