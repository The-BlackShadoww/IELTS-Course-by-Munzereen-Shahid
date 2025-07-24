import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SectionCourseLayout, CourseLayoutItem } from "@/types";
import Image from "next/image";

const CourseLayout = (courseLayout: SectionCourseLayout) => {
    return (
        <div>
            <h1>{courseLayout?.name || "How the course is laid out"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseLayout?.values?.map((item: CourseLayoutItem) => (
                    <Card key={item.id} className="">
                        <CardContent>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={36}
                                height={36}
                            />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.subtitle}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CourseLayout;
