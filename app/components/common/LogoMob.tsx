"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { JSX } from "react";

const LogoMob = ({ session }: any): JSX.Element => {
    return (
        <>
            <Link
                href={session?.user?.isAdmin ? "/admin" : "/"}
                className="min-h-12 min-w-12"
            >
                <Image
                    src={logo}
                    alt="Logo"
                    className="min-h-12 h-12 min-w-12 w-auto"
                />
            </Link>
        </>
    );
};

export default LogoMob;
