import Link from "next/link";
import arrow from "@/public/svg/arrow-reverse.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JSX } from "react";

const ButtonLogoutArrow = (): JSX.Element => {
    const router = useRouter();

    const handleLogout = async () => {
        // Logout logic
        router.push("/");
    };

    return (
        <div
            onClick={handleLogout}
            className="bg-button-background-color text-button-text-color pt-1 pb-1 w-28 max-w-28 min-w-28 rounded-lg font-bold text-center cursor-pointer flex flex-row justify-around items-center"
        >
            <Image src={arrow} alt="Logo" className="h-6 min-h-6 w-auto" />
            Logout
        </div>
    );
};

export default ButtonLogoutArrow;
