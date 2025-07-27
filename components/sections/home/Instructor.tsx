import { Card, CardContent } from "@/components/ui/card";
import { SectionInstructor } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Instructor = (instructor: SectionInstructor) => {
    return (
        <section>
            <h1 className="section_title">
                {instructor?.name || "Instructor"}
            </h1>
            <Card className="">
                <CardContent className="flex flex-col sm:flex-row items-center gap-4 max-sm:text-center">
                    <div>
                        <Image
                            src={instructor?.values[0].image}
                            alt={instructor.values[0].name}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <Link
                            href={
                                "https://10minuteschool.com/en/skills/instructors/munzereen-shahid/"
                            }
                            target="_blank"
                            className="text-lg font-medium hover:underline"
                        >
                            {instructor.values[0].name}
                        </Link>
                        <p
                            className="text-sm font-medium text-[#111827]"
                            dangerouslySetInnerHTML={{
                                __html: instructor.values[0].description,
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default Instructor;
