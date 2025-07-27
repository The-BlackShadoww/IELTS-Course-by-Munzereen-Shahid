"use client";

import { cn } from "@/lib/utils";
import { Media } from "@/types";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

interface CourseMediaProps {
    media: Media[];
}

const CourseMedia = ({ media }: CourseMediaProps) => {
    const [selectedMedia, setSelectedMedia] = React.useState<Media | null>(
        null
    );

    useEffect(() => {
        if (media.length > 0) {
            setSelectedMedia(media[0]);
        }
    }, [media]);

    return (
        <div className="space-y-4">
            <div className="w-full h-[300px] rounded-md">
                {selectedMedia?.resource_type === "image" && (
                    <div className="w-full h-full">
                        <Image
                            src={selectedMedia.resource_value}
                            alt={selectedMedia.name}
                            width={400}
                            height={400}
                            className="size-full object-contain rounded-md"
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
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="size-full object-contain rounded-md"
                        ></iframe>
                    </div>
                )}
            </div>

            <div className="flex gap-2 overflow-x-scroll pb-2">
                {media.map((item: Media, index) => (
                    <div
                        key={index}
                        className={cn(
                            "shrink-0 cursor-pointer border-2 border-transparent rounded-sm overflow-hidden",
                            item.resource_value ===
                                selectedMedia?.resource_value &&
                                "border-[#1cab55]"
                        )}
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
                                    <PlayCircle width={12} color="red" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseMedia;
