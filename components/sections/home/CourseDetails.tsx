import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { CourseDetailsType, SectionCourseDetails } from "@/types";

const CourseDetails = (courseDetails: SectionCourseDetails) => {
    return (
        <div>
            <h1>{courseDetails?.name || "Course Exclusive Feature"}</h1>
            <Accordion type="single" collapsible>
                {courseDetails?.values?.map(
                    (courseDetail: CourseDetailsType) => (
                        <AccordionItem
                            key={courseDetail.id}
                            value={courseDetail.id}
                        >
                            <AccordionTrigger className="cursor-pointer">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: courseDetail.title,
                                    }}
                                ></p>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div
                                    className="tenms__description"
                                    dangerouslySetInnerHTML={{
                                        __html: courseDetail.description,
                                    }}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </div>
    );
};

export default CourseDetails;
