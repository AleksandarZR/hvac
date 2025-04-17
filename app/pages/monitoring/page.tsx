"use client";
import Navigation from "@/app/components/navigation-vertical/index";

export default function Monitoring() {
    return (
        <>
            <Navigation></Navigation>

            <main className="pl-space22 lg:pl-[calc(var(--navwidth)+var(--space5))] pt-[calc(var(--navheight)+var(--space22))] md:pt-[calc(var(--navheight)+var(--space15))] lg:pt-space5 lg:pr-space5 sm:pr-space22 lg:pb-space5 sm:pb-space22 md:pb-space15 md:px-space5 min-w-screen min-h-screen flex flex-col justify-start items-center bg-color21 text-color2 overflow-x-hidden">
                <div className="flex flex-col justify-center items-center flex-grow w-full border-dashed border-black border-[1px]">
                    <h1 className="text-5xl">Template page for Vertical Menu</h1>
                </div>
            </main>
        </>
    );
}
