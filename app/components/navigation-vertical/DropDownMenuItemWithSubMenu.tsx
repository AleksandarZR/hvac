import React, { JSX, useState } from "react";
import { usePathname } from "next/navigation";

interface Properties {
    children: JSX.Element | JSX.Element[];
    menuItemName: string;
    customStyle?: string;
    subMenuItemClicked?: () => void;
    //subMenuItemClicked?: any;
    relatedPaths?: string[];
}

const DropDownMenuItemWithSubMenu = ({ children, menuItemName, customStyle="", subMenuItemClicked, relatedPaths=[""] }: Properties): JSX.Element => {
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const pathname = usePathname();

    const isActive = () => {
        if (relatedPaths.includes(pathname)) {
            return true;
        } else {
            return false;
        }
    }

    const handleMenuItemClicked = () => {
        setSubmenuVisible(!submenuVisible);
    }

    const handleSubMenuClicked = () => {
        setSubmenuVisible(!submenuVisible);

        if (subMenuItemClicked) {
            subMenuItemClicked();
        }
    }

    return (
        <div
            className="relative pl-3 pr-3 pb-0 pt-0 border-y-16 cursor-pointer no-underline"
            tabIndex={0}

            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setSubmenuVisible(false);
                }
            }}
        >
            {/* Menu Item */}
            <div onClick={handleMenuItemClicked} 
                className={isActive() ? "p-2 text-xl text-color7" : "p-2 text-xl"}>
                {menuItemName}
            </div>

            {/* Submenu Items Container*/}
            <div
                className={
                    submenuVisible
                        ? `flex flex-col justify-start items-start absolute pl-2 pr-2 bg-color1-transparent whitespace-nowrap w-fit bg-color3 ${customStyle}`
                        : "hidden"
                }
                onClick={handleSubMenuClicked}
            >
                {children}
            </div>
        </div>
    );
}

export default DropDownMenuItemWithSubMenu;