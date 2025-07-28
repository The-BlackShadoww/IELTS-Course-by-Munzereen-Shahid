import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CourseInstructor, SectionInstructor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const Instructor = (instructor: SectionInstructor) => {
    return (
        <section>
            <h1 className="section_title">
                {instructor?.name || "Instructor"}
            </h1>
            <Card className="">
                {instructor?.values?.map((item: CourseInstructor, index) => (
                    <CardContent
                        key={index}
                        className="flex flex-col sm:flex-row items-center gap-4 max-sm:text-center"
                    >
                        <div>
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <Link
                                href={
                                    item.has_instructor_page
                                        ? `https://10minuteschool.com/skills/instructors/${item.slug}`
                                        : ""
                                }
                                target="_blank"
                                className={cn(
                                    "text-lg font-medium",
                                    item.has_instructor_page
                                        ? "hover:underline"
                                        : ""
                                )}
                            >
                                {item.name}
                            </Link>
                            <div
                                className="text-sm font-medium text-[#111827]"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                        item.description
                                    ),
                                }}
                            />
                        </div>
                    </CardContent>
                ))}
            </Card>
        </section>
    );
};

export default Instructor;
