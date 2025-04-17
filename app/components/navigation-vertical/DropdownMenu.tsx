import React, { useState, useRef, JSX } from "react";
import Image from "next/image";
import hamburger from "@/public/svgbforeai/hamburger.svg";
import { useClickOutside } from "@/app/hooks/useOutsideClick";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
// import { Session } from "next-auth";
import Arrow from "@/app/components/common/Arrow";
import DropDownMenuItemWithSubMenu from "@/app/components/navigation/DropDownMenuItemWithSubMenu";
import SubMenuItemLink from "@/app/components/navigation/SubMenuItemLink";
import MenuItemLink from "@/app/components/navigation/MenuItemLink";
import MenuItemLinkWithIcon from "./MenuItemLinkWithIcon";
import ButtonLink from "../common/ButtonLink";
import MenuItems from "./MenuItems";
import settingsIcon from "@/public/svgbforeai/settings.svg";
import supportIcon from "@/public/svgbforeai/support.svg";
import logoutIcon from "@/public/svgbforeai/logout.svg";

const DropDownMenu = (/*{ session }: { session: Session }*/): JSX.Element => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [dropDownVisible, setDropDownVisible] = useState(false);

    /*useClickOutside(dropdownRef, () => {
        setDropDownVisible(false);
    });*/

    const subMenuItemClickedHandler = () => {
        setDropDownVisible(false);
    };

    const menuItemClickedHandler = () => {
        setDropDownVisible(false);
    };

    return (
        <div ref={dropdownRef}>
            {/* Hamburger icon */}
            <div
                className="min-h-12 min-w-12 cursor-pointer"
                onClick={() => setDropDownVisible((prev) => !prev)}
            >
                <Image
                    src={hamburger}
                    alt="Logo"
                    className="min-h-12 h-12 min-w-12 w-12 scale-[115%]"
                />
            </div>

            {/* Dropdown Menu */}
            <div
                className={
                    dropDownVisible
                        ? "lg:hidden sm:flex flex-col justify-start fixed left-0 bg-color1-transparent w-navwidth top-navheight font-3xl drop-shadow-2xl"
                        : "hidden"
                }
                style={{ fontSize: "1.5rem" }}
            >
                <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-var(--navheight))] bg-color0">
                    <div className="px-space2 flex-grow bg-color0">
                        <MenuItems />
                    </div>

                    <div
                        id="section2"
                        className="py-space2 min-h-[50px] w-full bg-color5 flex flex-col justify-around items-center text-xs"
                    >
                        <p className="pb-space2 text-color2">
                            Connect with our sales team
                        </p>
                        <ButtonLink
                            text={"Get a live demo!"}
                            link={"/"}
                        ></ButtonLink>
                    </div>

                    <div
                        id="section3"
                        className="min-h-[100px] w-full bg-color0 text-color2"
                    >
                        <MenuItemLinkWithIcon
                            href={"/pages/settings"}
                            label={"Settings"}
                            iconPath={settingsIcon}
                        ></MenuItemLinkWithIcon>
                        <MenuItemLinkWithIcon
                            href={"/pages/support"}
                            label={"Support"}
                            iconPath={supportIcon}
                        ></MenuItemLinkWithIcon>
                        <MenuItemLinkWithIcon
                            href={"/pages/logout"}
                            label={"Logout"}
                            iconPath={logoutIcon}
                            customStyle="py-space2 bg-color23 text-color0"
                        ></MenuItemLinkWithIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;
