import React, { JSX } from "react";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";
import MenuItemLinkWithIcon from "./MenuItemLinkWithIcon";
import SubMenuItemLink from "./SubMenuItemLink";
import dashboardIcon from "@/public/svgbforeai/dashboard.svg";
import myBrandIcon from "@/public/svgbforeai/mybrand.svg";
import threatsIcon from "@/public/svgbforeai/threats.svg";
import activeDefenseIcon from "@/public/svgbforeai/activedefense.svg";
import usersIcon from "@/public/svgbforeai/users.svg";

const MenuItems = (): JSX.Element => {
    return (
        <div className="pt-space5 flex flex-col justify-start items-start text-nowrap text-color0">
            <MenuItemLinkWithIcon href={"/"} label={"Dashboard"} iconPath={dashboardIcon} />
            <MenuItemLinkWithIcon href={"/pages/mybrand"} label={"Alarms"} iconPath={myBrandIcon} />
            <MenuItemLinkWithIcon href={"/pages/threats"} label={"Assets"} iconPath={threatsIcon} />
            <MenuItemLinkWithIcon href={"/pages/activedefense"} label={"Rules"} iconPath={activeDefenseIcon} />
            <MenuItemLinkWithIcon href={"/pages/users"} label={"Workflow"} iconPath={usersIcon} />
            <MenuItemLinkWithIcon href={"/pages/users"} label={"Org Settings"} iconPath={usersIcon} />
            <MenuItemLinkWithIcon href={"/pages/users"} label={"Activity Logs"} iconPath={usersIcon} />
        </div>
    );
};

export default MenuItems;
