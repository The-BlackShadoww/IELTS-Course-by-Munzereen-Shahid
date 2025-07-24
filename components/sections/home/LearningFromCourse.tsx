import { Card, CardContent } from "@/components/ui/card";
import { SectionPointers } from "@/types";
import { Check } from "lucide-react";

const LearningFromCourse = (pointers: SectionPointers) => {
    return (
        <div>
            <h1>
                {pointers?.name || "What you will learn by doing the course"}
            </h1>
            <Card className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pointers?.values?.map(
                    (pointer: { id: string; text: string }) => (
                        <CardContent
                            key={pointer.id}
                            className="flex items-start gap-2"
                        >
                            <Check className="shrink-0 translate-y-1" />
                            <h4>{pointer.text}</h4>
                        </CardContent>
                    )
                )}
            </Card>
        </div>
    );
};

export default LearningFromCourse;
