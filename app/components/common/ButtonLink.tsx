import Link from "next/link";
import { JSX } from "react";

interface Properties {
    text: string;
    link: string;
    customStyle?: string;
}

const ButtonLink = ({text="Jump to", link="/", customStyle=""}: Properties): JSX.Element => {
    return (
        <div className="bg-color9 pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center text-color0 text-[22px] cursor-pointer">
            <Link href={link} className="">
                {text}
            </Link>
        </div>
    );
}

export default ButtonLink;