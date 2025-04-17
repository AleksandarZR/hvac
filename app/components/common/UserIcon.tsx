"use client";

import Image from "next/image";
import Link from "next/link";
import icon from "@/public/svg/profile-icon.svg";
import { JSX, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
//import { useClickOutside } from "../../hooks/useOutsideClick";

const Logo = (): JSX.Element => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();
    const lang = pathname.split("/")[1];
    const router = useRouter();

    const [dropDownVisible, setDropDownVisible] = useState(false);

    //useClickOutside(dropdownRef, () => setDropDownVisible(false));

    const isActive = (href: string) => pathname === `/${lang}${href}`;


    const handleLinkClick = () => {
        setDropDownVisible(false);
    };

    const [showSellTokens, setShowSellTokens] = useState<boolean>(false);

    useEffect(() => {
        // const enoughTimePassed = async () => {
        //     const res = await fetch("/api/validateSellRequest", {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });

        //     setShowSellTokens(await res.json());
        // };

        // enoughTimePassed();
        // getUser();
    }, []);

    const getUser = async () => {
        const response = await fetch("/api/getUser");
        const user = await response.json();
        if(user) {
            //setUserKycStatus(user.kycStatus)
        }

        return user;
    };

    const renderLink = (href: string, label: string) => (
        <Link
            href={`/${lang}${href}`}
            className={
                isActive(href)
                    ? "pt-1 pb-1 font-extrabold text-button-background-color"
                    : "pt-1 pb-1 decoration-0 font-xl text-text-color-blue"
            }
            onClick={handleLinkClick}
        >
            {label}
        </Link>
    );

    const handleUserProfileIconClick = async () => {
        const user = await getUser();


        setDropDownVisible(false);
    }

    return (
        <div ref={dropdownRef}>
            <div className="sm:hidden">
                <div className="flex flex-col justify-end items-center cursor-pointer" onClick={handleUserProfileIconClick}>
                    <Image
                        src={icon}
                        alt="User Icon"
                        className="relative h-12 w-12"
                    />
                </div>
            </div>
            <div 
                className="lg:hidden md:hidden block cursor-pointer"
                onClick={() => setDropDownVisible((prev) => !prev)}
            >
                <Image
                    src={icon}
                    alt="User Icon"
                    className="relative h-12 w-12"
                />
            </div>

            <div
                className={
                    dropDownVisible
                        ? "lg:hidden md:hidden sm:flex flex-col justify-end fixed right-0 bg-primary-color-transparent w-60 pt-4 top-20 font-3xl z-30"
                        : "hidden"
                }
                style={{ fontSize: "1.5rem" }}
            >
                <div className="flex flex-col justify-center items-center w-full">
                    
                    {renderLink("/user-profile/crypto-wallet", "aaa")}
                    {renderLink("/user-profile/portfolio", "bbb")}
                    {renderLink("/user-profile/orders", "ccc")}
                    {showSellTokens && renderLink("/user-profile/sell-tokens", "ddd")}
                </div>
            </div>
        </div>
    );
};

export default Logo;
