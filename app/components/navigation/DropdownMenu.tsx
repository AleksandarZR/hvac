import React, { useState, useRef, JSX } from "react";
import Image from "next/image";
import hamburger2 from "@/public/svg/hamburger.svg";
import { useClickOutside } from "@/app/hooks/useOutsideClick";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
// import { Session } from "next-auth";
import Arrow from "@/app/components/common/Arrow";
import DropDownMenuItemWithSubMenu from "@/app/components/navigation/DropDownMenuItemWithSubMenu";
import SubMenuItemLink from "@/app/components/navigation/SubMenuItemLink";
import MenuItemLink from "@/app/components/navigation/MenuItemLink";

const DropDownMenu = (/*{ session }: { session: Session }*/): JSX.Element => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [dropDownVisible, setDropDownVisible] = useState(false);

    /*useClickOutside(dropdownRef, () => {
        setDropDownVisible(false);
    });*/

    const subMenuItemClickedHandler = () => {
        setDropDownVisible(false);
    }

    const menuItemClickedHandler = () => {
        setDropDownVisible(false);
    }

    return (
        <div ref={dropdownRef}>
            {/* Hamburger icon */}
            <div
                className="min-h-12 min-w-12 cursor-pointer"
                onClick={() => setDropDownVisible((prev) => !prev)}
            >
                <Image
                    src={hamburger2}
                    alt="Logo"
                    className="min-h-12 h-12 min-w-12 w-12 scale-[115%]"
                />
            </div>

            {/* Dropdown Menu */}
            <div
                className={
                    dropDownVisible
                        ? "lg:hidden sm:flex flex-col justify-start fixed left-0 bg-color1-transparent w-48 pt-4 pb-5 top-20 font-3xl"
                        : "hidden"
                }
                style={{ fontSize: "1.5rem" }}
            >
                <div className="flex flex-col justify-center items-center w-full">
                    <DropDownMenuItemWithSubMenu
                        menuItemName="Components"
                        subMenuItemClicked={subMenuItemClickedHandler}
                        customStyle="top-[-16px] left-[174px]"
                        relatedPaths={["/pages/components1", "/pages/components2"]}
                    >
                        <SubMenuItemLink href="/pages/components1" label="Components 1" />
                        <SubMenuItemLink href="/pages/components2" label="Components 2" />
                    </DropDownMenuItemWithSubMenu>

                    <DropDownMenuItemWithSubMenu
                        menuItemName="Parallax"
                        subMenuItemClicked={subMenuItemClickedHandler}
                        customStyle="top-[-2px] left-[154px]"
                        relatedPaths={["/pages/parallax1", "/pages/parallax2", "/pages/parallax3", "/pages/parallax5", "/pages/parallax6"]}
                    >
                        <SubMenuItemLink href={"/pages/parallax1"} label={"Parallax effect 1"} />
                        <SubMenuItemLink href={"/pages/parallax2"} label={"Parallax effect 2"} />
                        <SubMenuItemLink href={"/pages/parallax3"} label={"Parallax effect 3"} />
                        <SubMenuItemLink href={"/pages/parallax4"} label={"Parallax effect 4"} />
                        <SubMenuItemLink href={"/pages/parallax5"} label={"Parallax effect 5"} />
                        <SubMenuItemLink href={"/pages/parallax6"} label={"Parallax effect 6"} />
                    </DropDownMenuItemWithSubMenu>

                    <MenuItemLink href={"/pages/settings"} label={"Settings"} onClickHandler={menuItemClickedHandler} />

                    <DropDownMenuItemWithSubMenu
                        menuItemName="Home"
                        subMenuItemClicked={subMenuItemClickedHandler}
                        customStyle="top-[-2px] left-[144px]"
                        relatedPaths={["/pages/home1", "/pages/home2"]}
                    >
                        <SubMenuItemLink href={"/pages/home1"} label={"Home 1"} />
                        <SubMenuItemLink href={"/pages/home2"} label={"Home 2"} />
                    </DropDownMenuItemWithSubMenu>

                    <div className="p-2">
                        {/* {!session && (
                            <Arrow />
                        )}
                        {session && <LogoutButtonArrow />} */}
                        <Arrow></Arrow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;
