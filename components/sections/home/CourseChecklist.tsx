import { Button } from "@/components/ui/button";
import { Checklist, CtaText } from "@/types";
import Image from "next/image";

const CourseChecklist = ({
    cta,
    checklist,
}: {
    cta: CtaText;
    checklist: Checklist[];
}) => {
    return (
        <div className="space-y-4">
            {/* Price */}
            <h2 className="inline-block text-2xl font-semibold">৳ 1000</h2>
            {/* CTA */}
            <div>
                <Button className="w-full bg-app-green hover:bg-app-dark-green cursor-pointer rounded-sm">
                    {cta?.name || "Enroll Now"}
                </Button>
            </div>
            {/* Checklist */}
            <h2 className="mb-5 text-lg font-semibold text-[#111827]">
                এই কোর্সে যা থাকছে
            </h2>
            <div>
                <ul className="space-y-4">
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
                                <p className="text-base/[20px] text-[#111827]">
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseChecklist;
