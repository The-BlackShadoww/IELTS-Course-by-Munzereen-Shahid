import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { SectionCourseLayout, CourseLayoutItem } from "@/types";
import Image from "next/image";

const CourseLayout = (courseLayout: SectionCourseLayout) => {
    return (
        <section>
            <h1 className="section_title">
                {courseLayout?.name || "How the course is laid out"}
            </h1>
            <Card className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 bg-[#111827] rounded-2xl max-md:p-0">
                {courseLayout?.values?.map((item: CourseLayoutItem) => (
                    <Card
                        key={item.id}
                        className="w-full center bg-transparent text-white border-none"
                    >
                        <CardContent className="center flex-col gap-3 text-center">
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={36}
                                height={36}
                            />
                            <div className="space-y-3">
                                <h2 className="text-lg font-medium">
                                    {item.title}
                                </h2>
                                <p className="max-md:max-w-[70%] max-md:mx-auto text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                                    {item.subtitle}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Card>
        </section>
    );
};

export default CourseLayout;
