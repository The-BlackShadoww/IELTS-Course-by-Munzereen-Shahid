"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { useTransition } from "react";
import { setLanguage } from "@/app/actions/language";

interface NavProps {
    initialLanguage: string;
}

const Nav = ({ initialLanguage }: NavProps) => {
    const [isPending, startTransition] = useTransition();
    const [currentLang, setCurrentLang] = React.useState(initialLanguage);

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "bn" : "en";

        startTransition(async () => {
            await setLanguage(newLang);
            setCurrentLang(newLang);
        });
    };

    return (
        <nav className="w-full h-full border-b">
            <div className="wrapper flex items-center justify-between py-4">
                <div>
                    <Image
                        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                        alt="10 Minute School Logo"
                        width={100}
                        height={50}
                    />
                </div>
                <Button
                    className="cursor-pointer"
                    onClick={toggleLanguage}
                    disabled={isPending}
                >
                    <Languages />
                    {isPending ? "..." : currentLang === "en" ? "BN" : "EN"}
                </Button>
            </div>
        </nav>
    );
};

export default Nav;
