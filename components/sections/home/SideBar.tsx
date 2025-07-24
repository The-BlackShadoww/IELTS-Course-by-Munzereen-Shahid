"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Checklist, CtaText, Media } from "@/types";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

interface SideBarProps {
    media: Media[];
    cta: CtaText;
    checklist: Checklist[];
}
const SideBar = ({ media, cta, checklist }: SideBarProps) => {
    const [selectedMedia, setSelectedMedia] = React.useState<Media | null>(
        null
    );

    useEffect(() => {
        if (media.length > 0) {
            setSelectedMedia(media[0]);
        }
    }, [media]);

    return (
        // <div className="w-[380px] absolute top-4 right-0">
        <div className="max-w-[380px] w-full">
            <Card>
                <CardContent className="overflow-x-hidden space-y-5">
                    {/* Image and Video */}
                    <div className="w-full h-[300px] rounded-2xl border">
                        {selectedMedia?.resource_type === "image" && (
                            <div className="w-full h-full">
                                <Image
                                    src={selectedMedia.resource_value}
                                    alt={selectedMedia.name}
                                    width={400}
                                    height={400}
                                    className="size-full object-contain rounded-2xl"
                                />
                            </div>
                        )}
                        {selectedMedia?.resource_type === "video" && (
                            <div className="w-full h-full">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${selectedMedia.resource_value}`}
                                    title={selectedMedia.name}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className="size-full object-contain rounded-2xl"
                                ></iframe>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-3 overflow-x-scroll pb-2">
                        {media.map((item: Media, index) => (
                            <div
                                key={item.name}
                                className={cn("shrink-0 cursor-pointer")}
                                onClick={() => setSelectedMedia(item)}
                            >
                                {item.resource_type === "image" && (
                                    <div className="w-[50px] h-[40px]">
                                        <Image
                                            src={item.resource_value}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="size-full object-cover"
                                        />
                                    </div>
                                )}

                                {item.resource_type === "video" && (
                                    <div className="w-[50px] h-[40px] relative">
                                        <Image
                                            src={item.thumbnail_url || ""}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="size-full object-cover"
                                        />

                                        <div className="size-5 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 center">
                                            <PlayCircle
                                                width={12}
                                                color="red"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Price */}
                    <h2 className="inline-block text-2xl font-semibold">৳1000 </h2>

                    {/* CTA */}
                    <div>
                        <Button className="w-full bg-green-500 hover:bg-green-400 cursor-pointer">
                            {cta?.name || "Enroll Now"}
                        </Button>
                    </div>

                    <div>
                        <h2 className="mb-5 font-bold">এই কোর্সে যা থাকছে</h2>
                        <ul className="space-y-3">
                            {checklist.map((item) => (
                                <li key={item.id}>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <Image
                                                src={item.icon}
                                                alt={item.text}
                                                width={20}
                                                height={20}
                                                className=""
                                            />
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SideBar;
