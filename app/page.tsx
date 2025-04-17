"use client";
import styles from "./page.module.css";
import Image from "next/image";
import building from "@/public/images/building07.jpg";
import logo from "@/public/images/LogoHvac.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoginForm from "@/app/components/common/LoginForm";

export default function Home() {
    useEffect(() => {}, []);

    return ( 
        <>
            <Image
                id='background'
                // className="bg-top-center bg-cover bg-no-repeat bg-[url('/images/building01.jpg')] bg-fixed absolute min-w-full min-h-full"
                className='w-full h-full object-cover fixed'
                src={building}
                alt='Building'
            />

            <Image
                id='logo'
                className='fixed top-space2 drop-shadow-[0_2.8px_2.8px_rgba(0,0,0,0.8)]'
                src={logo}
                alt='Logo Hvac'
            />

            <main className='relative w-full h-full flex flex-col justify-start items-center z-20'>
                <h1 className='pt-40 pb-20 text-white text-[50px] text-center font-bold drop-shadow-[0_2.8px_2.8px_rgba(0,0,0,0.8)]'>
                    Building Management Platform
                </h1>

                <LoginForm></LoginForm>
            </main>
        </>
    );
}
