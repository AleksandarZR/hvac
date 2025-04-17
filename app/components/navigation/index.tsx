"use client";

import React, { JSX } from "react";
import LogoDesktop from "@/app/components/common/LogoDesktop";
import DropDownMenu from "@/app/components/navigation/DropdownMenu";
import LogoMob from "@/app/components/common/LogoMob";
import MenuItems from "@/app/components/navigation/MenuItems";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
import UserIcon from "@/app/components/common/UserIcon";
import Arrow from "@/app/components/common/Arrow";

const Navigation = ({ session }: any): JSX.Element => {
    return (
        <>
            {/* Desktop Navigation */}
            <div className="md:hidden sm:hidden flex flex-row justify-between items-center w-full h-navheight fixed top-0 left-0 z-40 pt-4 pb-4 px-space5 bg-color1-transparent border-b-2">
                <div>
                    <LogoDesktop session={session} />
                </div>

                <MenuItems/>

                {session && (
                    <div className=" min-w-[42px]">
                        <UserIcon></UserIcon>
                    </div>
                )}
                
                {!session && (
                    <Arrow/>
                )}
                {session && <LogoutButtonArrow />}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex flex-row justify-between items-center w-full max-w-full h-navheight fixed top-0 left-0 z-40 pt-4 pb-4 md:px-space15 sm:px-space22 bg-color1-transparent border-b-2">
                <DropDownMenu /*session={session}*/ />

                {/* Center the Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <LogoMob />
                </div>

                {/* User Icons on the right */}
                <div className="flex items-center md:space-x-2">
                    {session && <UserIcon />}
                    {!session && <Arrow/>}
                </div>
            </div>
        </>
    );
};

export default Navigation;
