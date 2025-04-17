"use client";

import { JSX } from "react";
import TextInput from "@/app/components/common/TextInput";
import ButtonLink from "@/app/components/common/ButtonLink";

interface Properties {
    customStyle?: string;
    text?: string;
    children?: JSX.Element | JSX.Element[]; // in case child elements are needed
}

const LoginForm = ({ customStyle="", text="Login Form", children }: Properties): JSX.Element => {
    return (
        <div
            id="container"
            className={`${customStyle} flex flex-col flex-start justify-around items-center w-[500px] h-[350px] bg-color2-transparent rounded-2xl text-3xl`}
        >
            <h1>{text}</h1>

            <TextInput></TextInput>
            <TextInput></TextInput>
            <ButtonLink text={"Login"} link={"/pages/monitoring"} customStyle=""></ButtonLink>

            {children}
        </div>
    );
};

export default LoginForm;
