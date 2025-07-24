import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseExclusiveFeature, SectionExclusiveFeatures } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";

const ExclusiveFeatures = (exclusiveFeatures: SectionExclusiveFeatures) => {
    return (
        <div>
            <h1>{exclusiveFeatures?.name || "Course Exclusive Feature"}</h1>
            {exclusiveFeatures?.values?.map(
                (exclusiveFeature: CourseExclusiveFeature) => (
                    <Card key={exclusiveFeature.id}>
                        <CardHeader>
                            <CardTitle>{exclusiveFeature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                {exclusiveFeature.checklist.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="shrink-0 translate-y-1" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="w-full h-full">
                                <Image
                                    src={exclusiveFeature.file_url}
                                    alt={exclusiveFeature.title}
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </CardContent>
                    </Card>
                )
            )}
        </div>
    );
};

export default ExclusiveFeatures;
