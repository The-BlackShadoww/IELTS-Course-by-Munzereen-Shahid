"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checklist, CtaText, Media } from "@/types";
import React from "react";
import CourseMedia from "./CourseMedia";
import CourseChecklist from "./CourseChecklist";
import { motion, useScroll, useTransform } from "motion/react";

interface SideBarProps {
    media: Media[];
    cta: CtaText;
    checklist: Checklist[];
}

const SideBar = ({ media, cta, checklist }: SideBarProps) => {
    const { scrollY } = useScroll();
    const topValue = useTransform(scrollY, [0, 300], [60, 400]);

    return (
        <motion.div
            style={{ top: topValue }}
            className="hidden md:block md:max-w-[330px] lg:max-w-[400px] w-full absolute right-0"
        >
            <Card className="p-1 pb-4">
                <CardContent className="overflow-x-hidden space-y-5 p-2">
                    <CourseMedia media={media} />
                    <CourseChecklist cta={cta} checklist={checklist} />
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default SideBar;
