import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CourseDetailsType, SectionCourseDetails } from "@/types";

const CourseDetails = (courseDetails: SectionCourseDetails) => {
    return (
        <section>
            <h1 className="section_title">
                {courseDetails?.name || "Course Exclusive Feature"}
            </h1>
            <Card>
                <CardContent>
                    <Accordion type="single" collapsible>
                        {courseDetails?.values?.map(
                            (courseDetail: CourseDetailsType) => (
                                <AccordionItem
                                    key={courseDetail.id}
                                    value={courseDetail.id}
                                    className="border-dashed"
                                >
                                    <AccordionTrigger className="cursor-pointer">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: courseDetail.title,
                                            }}
                                            className="text-base/[24px] font-medium"
                                        ></p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div
                                            className="prose prose-ul:pl-4 text-base/[28px] text-[#4B5563] "
                                            dangerouslySetInnerHTML={{
                                                __html: courseDetail.description,
                                            }}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        )}
                    </Accordion>
                </CardContent>
            </Card>
        </section>
    );
};

export default CourseDetails;
