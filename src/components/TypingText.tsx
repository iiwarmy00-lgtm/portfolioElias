import { useEffect, useState } from "react";

type Props = {
    text: string;
};

export const TypingText = ({ text }: Props) => {
    const [visibleText, setVisibleText] = useState("");


    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setVisibleText(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [text]);

    return <p>{visibleText}</p>;
};