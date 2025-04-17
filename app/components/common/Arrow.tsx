"use client";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/svg/arrow.svg";
import { JSX } from "react";

const Arrow = (): JSX.Element => {
    return (
        <>
            <Link href="/login" className="min-h-12 min-w-12 cursor-pointer">
                <Image
                    src={arrow}
                    alt="Logo"
                    className="h-12 min-h-12 w-auto"
                />
            </Link>
        </>
    );
};

export default Arrow;
