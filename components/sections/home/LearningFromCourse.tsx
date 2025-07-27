import { Card, CardContent } from "@/components/ui/card";
import { SectionPointers } from "@/types";
import { Check } from "lucide-react";

const LearningFromCourse = (pointers: SectionPointers) => {
    return (
        <section>
            <h1 className="section_title">
                {pointers?.name || "What you will learn by doing the course"}
            </h1>
            <Card className="grid grid-cols-1 gap-5  border-dashed">
                {pointers?.values?.map(
                    (pointer: { id: string; text: string }) => (
                        <CardContent
                            key={pointer.id}
                            className="flex items-start gap-4"
                        >
                            <div className="shrink-0 translate-y-1 size-5 rounded-full bg-app-green/20 border border-app-green center">
                                <Check
                                    className=""
                                    width={12}
                                    color="#1cab55"
                                />
                            </div>
                            <h4 className="bullet_text">{pointer.text}</h4>
                        </CardContent>
                    )
                )}
            </Card>
        </section>
    );
};

export default LearningFromCourse;
