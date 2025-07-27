import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseExclusiveFeature, SectionExclusiveFeatures } from "@/types";
import { Check } from "lucide-react";
import Image from "next/image";

const ExclusiveFeatures = (exclusiveFeatures: SectionExclusiveFeatures) => {
    return (
        <section>
            <h1 className="section_title">
                {exclusiveFeatures?.name || "Course Exclusive Feature"}
            </h1>
            {exclusiveFeatures?.values?.map(
                (exclusiveFeature: CourseExclusiveFeature) => (
                    <Card key={exclusiveFeature.id} className="last:mt-4">
                        <CardHeader>
                            <CardTitle>{exclusiveFeature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                            <div className="space-y-4">
                                {exclusiveFeature.checklist.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="shrink-0 translate-y-1 size-5 rounded-full bg-app-green/20 border border-app-green center">
                                            <Check
                                                className=""
                                                width={12}
                                                color="#1cab55"
                                            />
                                        </div>
                                        <span className="bullet_text">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full center">
                                <div className="mb-4 mx-auto max-w-[350px]">
                                    <Image
                                        src={exclusiveFeature.file_url}
                                        alt={exclusiveFeature.title}
                                        width={200}
                                        height={200}
                                        loading="lazy"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            )}
        </section>
    );
};

export default ExclusiveFeatures;
