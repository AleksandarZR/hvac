import { RefObject, useEffect } from "react";

export const useClickOutside = (
    ref: RefObject<Node | undefined>,
    callback: () => void
) => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current?.contains(event.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        };
    });
};
