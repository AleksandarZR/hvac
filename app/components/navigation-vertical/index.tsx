"use client";

import React, { JSX } from "react";
import LogoDesktop from "@/app/components/common/LogoDesktop";
import DropDownMenu from "@/app/components/navigation-vertical/DropdownMenu";
import LogoMob from "@/app/components/common/LogoMob";
import MenuItems from "@/app/components/navigation-vertical/MenuItems";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
import UserIcon from "@/app/components/common/UserIcon";
import Arrow from "@/app/components/common/Arrow";
import ButtonLink from "../common/ButtonLink";
import MenuItemLinkWithIcon from "./MenuItemLinkWithIcon";
import settingsIcon from "@/public/svgbforeai/settings.svg";
import supportIcon from "@/public/svgbforeai/support.svg";
import logoutIcon from "@/public/svgbforeai/logout.svg";

const Navigation = ({ session }: any): JSX.Element => {
    return (
        <>
            {/* Desktop Navigation */}
            <div className="md:hidden sm:hidden flex flex-col justify-start items-start h-full w-navwidth max-w-navwidth fixed top-0 left-0 z-40 bg-color3 border-b-2 drop-shadow-2xl">
                <div className="w-full flex flex-col justify center items-center px-space2 py-space2">
                    <LogoDesktop session={session} />
                </div>

                <div className="mx-space2 w-[calc(var(--navwidth)-2*(var(--space2)))] h-[2px] bg-color21"></div>

                <div className="px-0 flex-grow">
                    <MenuItems />
                </div>

                {/* <div id="section2" className="py-space2 min-h-[50px] w-full bg-color5 flex flex-col justify-around items-center text-xs">
                    <p className="pb-space2 text-color2">Connect with our sales team</p>
                    <ButtonLink text={"Get a live demo!"} link={"/"}></ButtonLink>
                </div>

                <div id="section3" className="min-h-[100px] w-full bg-color0 text-color2">
                    <MenuItemLinkWithIcon href={"/pages/settings"} label={"Settings"} iconPath={settingsIcon}></MenuItemLinkWithIcon>
                    <MenuItemLinkWithIcon href={"/pages/support"} label={"Support"} iconPath={supportIcon}></MenuItemLinkWithIcon>
                    <MenuItemLinkWithIcon href={"/pages/logout"} label={"Logout"} iconPath={logoutIcon} customStyle="py-space2 bg-color23 text-color0"></MenuItemLinkWithIcon>
                </div> */}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex flex-row justify-between items-center w-full max-w-full h-navheight fixed top-0 left-0 z-100 pt-4 pb-4 md:px-space15 sm:px-space22 bg-color0 border-b-2">
                <DropDownMenu /*session={session}*/ />

                {/* Center the Logo */}
                <div className="">
                    <LogoMob />
                </div>

                
            </div>
        </>
    );
};

export default Navigation;
