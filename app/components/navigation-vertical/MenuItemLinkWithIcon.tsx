import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Properties {
    href: string;
    label: string;
    onClickHandler?: any;
    iconPath: string;
    customStyle?: string;
}

const MenuItemLinkWithIcon = ({
    href,
    label,
    onClickHandler,
    iconPath,
    customStyle
}: Properties): JSX.Element => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const linkClicked = () => {
        if (onClickHandler) {
            onClickHandler();
        }
    };

    return (
        <Link
            href={href}
            onClick={linkClicked}
            className={
                isActive(href)
                    ? `block p-2 border-y-16 text-base font-bold bg-color21 rounded-md min-w-[200px] ${customStyle}`
                    : `block p-2 border-y-16 text-base font-bold no-underline ${customStyle}`
            }
        >
            <div className="flex flex-row justify-start items-center">
                <div
                    id="vertical-line"
                    className={
                        isActive(href)
                            ? "mx-[8px] h-8 min-w-[4px] max-w-[4px] bg-color23 rounded-md"
                            : "mx-[8px] h-8 min-w-[4px] max-w-[4px] bg-color23-transparent rounded-md"
                    }
                ></div>

                <Image
                    src={iconPath}
                    alt="icon"
                    className="h-8 min-h-8 w-auto"
                />
                <div className="pl-space22">{label}</div>
            </div>
        </Link>
    );
};

export default MenuItemLinkWithIcon;
