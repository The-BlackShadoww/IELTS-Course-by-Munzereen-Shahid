import { Card, CardContent } from "@/components/ui/card";
import { SectionInstructor } from "@/types";
import Image from "next/image";

const Instructor = (instructor: SectionInstructor) => {
    return (
        <div>
            <h1> {instructor?.name || "Instructor"}</h1>
            <Card className="">
                <CardContent className="flex items-center gap-4 mt-8">
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
                        <h4> {instructor.values[0].name}</h4>
                        <div
                            className="tenms__description"
                            dangerouslySetInnerHTML={{
                                __html: instructor.values[0].description,
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Instructor;
